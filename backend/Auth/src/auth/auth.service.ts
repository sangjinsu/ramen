import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MemberService } from 'src/member/member.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignupRequestDto } from './dto/signup.request.dto';
import { Fond } from 'src/member/entity/fond.entity';
import { Member } from 'src/member/entity/member.entity';
import { MemberLikeRamen } from 'src/member/entity/memberLikeRamen.entity';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  async vaildateMember(email: string, plainTextPassword: string): Promise<any> {
    const member = await this.memberService.findByEmail(email);
    const isPasswordMatch = await bcrypt.compare(
      plainTextPassword,
      member.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요');
    }
    const { password, ...result } = member;
    return result;
  }

  async register(body: SignupRequestDto) {
    const { inputEmail, inputPw, inputName, inputAge, inputGender } = body;
    const {
      noodleLength,
      noodleTexture,
      ingredientNone,
      ingredientGarlic,
      ingredientPepper,
      ingredientGreenOnion,
      egg,
      toppingNone,
      toppingCheese,
      toppingDumpling,
      toppingTteok,
      spicy,
    } = body;
    const { selectRamens } = body;

    const isMemberExisted = await this.memberService.findByEmail(inputEmail);

    if (isMemberExisted) {
      throw new UnauthorizedException('해당하는 멤버가 이미 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(inputPw, 10);

    const fond = Fond.createFond({
      noodleLength,
      noodleTexture,
      ingredientNone,
      ingredientGarlic,
      ingredientPepper,
      ingredientGreenOnion,
      egg,
      toppingNone,
      toppingCheese,
      toppingDumpling,
      toppingTteok,
      spicy,
    });

    const newFond = await this.memberService.createNewFond(fond);

    const member = Member.createMember({
      email: inputEmail,
      name: inputName,
      gender: inputGender,
      age: inputAge,
      hashedPassword,
      fond_id: newFond.fond_id,
    });

    const newMember = await this.memberService.createNewMember(member);

    selectRamens.forEach((ramen_id) => {
      const memberLikeRamen = MemberLikeRamen.createMemberLikeRamen({
        member_id: newMember.member_id,
        ramen_id,
      });
      this.memberService.createNewMemberLikeRamen(memberLikeRamen);
    });

    return newMember;
  }

  getJwtAccessToken(member: Member) {
    const payload = { sub: member.member_id, email: member.email };
    return this.jwtService.sign(payload, {
      expiresIn: '60s',
    });
  }

  async getJwtRefreshToken(member: Member) {
    const key = await bcrypt.hash(member.email, 10);
    const payload = { sub: member.member_id, email: member.email, key };
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '3600s',
    });
    return { refreshToken, key };
  }
}
