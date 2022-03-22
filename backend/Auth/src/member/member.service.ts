import { Injectable } from '@nestjs/common'
import { Member } from './entity/member.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>
  ) {}

  findOne(id: string): Promise<Member> {
    return this.memberRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.memberRepository.delete(id)
  }

  async create(member: Member): Promise<void> {
    await this.memberRepository.save(member)
  }
}
