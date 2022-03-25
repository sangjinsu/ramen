import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { MemberService } from 'src/member/member.service';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private readonly memberService: MemberService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Refresh;
        },
      ]),
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(req, payload: any) {
    const refreshToken = req.cookies?.Refresh;
    return this.memberService.getMemberIfRefreshTokenMatches(
      refreshToken,
      payload.id,
    );
  }
}
