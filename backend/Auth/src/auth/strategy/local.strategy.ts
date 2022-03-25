import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(inputEmail: string, inputPw: string): Promise<any> {
    const member = await this.authService.vaildateMember(inputEmail, inputPw);
    if (!member) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다');
    }
    return member;
  }
}
