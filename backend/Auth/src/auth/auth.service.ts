import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { MemberService } from 'src/member/member.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
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
    try {
      const member = await this.memberService.findByEmail(email);
      await this.verifyPassword(plainTextPassword, member.password);
      const { password, ...result } = member;
      return result;
    } catch (error) {
      throw new BadRequestException('Wrong credentials provided');
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatch = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatch) {
      throw new BadRequestException('Wrong credentials provided');
    }
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

  getCookieWithJwtAccessToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '10s',
    });

    return {
      accessToken: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 10 * 1000,
    };
  }

  getCookieWithJwtRefreshToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '3600s',
    });

    return {
      refreshToken: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 3600 * 1000,
    };
  }

  getCookiesForLogOut() {
    return {
      accessOption: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: 0,
      },
      refreshOption: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: 0,
      },
    };
  }
}
