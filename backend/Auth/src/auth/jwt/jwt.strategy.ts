import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Payload } from './jwt.paylaod';
import { MembersRepository } from 'src/members/repository/member.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly membersRepository: MembersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: Payload) {
    const member = await this.membersRepository.findOne({
      where: {
        member_id: payload.sub,
      },
      select: ['member_id', 'name'],
    });

    if (member) {
      return true;
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
