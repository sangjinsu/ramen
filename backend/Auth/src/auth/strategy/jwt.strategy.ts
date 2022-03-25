import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constant';
import { Payload } from '../jwt.payload';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly memberService: MemberService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const member = await this.memberService.findOne(Number(payload.sub));
    if (member) {
      return member;
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
