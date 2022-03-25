import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entity/member.entity';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { Fond } from './entity/fond.entity';
import { MemberLikeRamen } from './entity/memberLikeRamen.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Fond)
    private readonly fondRepository: Repository<Fond>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(): Promise<Member[]> {
    return await this.memberRepository.find();
  }

  async findOne(id: number): Promise<Member> {
    const member = await this.memberRepository.findOne({ member_id: id });
    if (member) {
      return member;
    }

    throw new NotFoundException('User with this id does not exist');
  }

  async findByEmail(email: string): Promise<Member> {
    return await this.memberRepository.findOne({ email });
  }

  async remove(id: string): Promise<void> {
    await this.memberRepository.delete(id);
  }

  async createNewMember(member: Member) {
    const createdMember = this.memberRepository.create(member);
    const savedMember = await this.memberRepository.save(createdMember);
    return savedMember;
  }

  async createNewFond(fond: Fond) {
    const createdfond = this.fondRepository.create(fond);
    const savedFond = await this.fondRepository.save(createdfond);
    return savedFond;
  }

  async createNewMemberLikeRamen(memberLikeRamen: MemberLikeRamen) {
    const createdMemberLikeRamen =
      this.memberRepository.create(memberLikeRamen);
    const savedMemberLikeRamen = await this.memberRepository.save(
      createdMemberLikeRamen,
    );
    return savedMemberLikeRamen;
  }

  async setCurrentRefreshToken(refreshToken: string, id: string) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.cacheManager.set(id, currentHashedRefreshToken, { ttl: 5000 });
  }

  async getMemberIfRefreshTokenMatches(refreshToken: string, id: string) {
    const currentHashedRefreshToken = (await this.cacheManager.get(
      id,
    )) as string;

    if (!currentHashedRefreshToken) {
      throw new UnauthorizedException('refresh token is expired');
    }

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      const member = await this.memberRepository.findOne({
        where: { member_id: Number(id) },
      });
      return member;
    }
  }

  async removeRefreshToken(id: string) {
    await this.cacheManager.del(id);
  }
}
