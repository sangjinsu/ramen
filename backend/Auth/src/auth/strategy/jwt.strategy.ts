import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { member_id: payload.member_id, email: payload.email };
  }
}
