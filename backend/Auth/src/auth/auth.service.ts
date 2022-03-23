import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MembersRepository } from 'src/members/repository/member.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly membersRepository: MembersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { inputEmail, inputPw } = data;

    const member = await this.membersRepository.findOne({
      where: { email: inputEmail },
    });

    if (!member) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const hashedPassword = await bcrypt.hash(inputPw, salt);

    const isPasswordValidated = await bcrypt.compare(
      hashedPassword,
      member.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { email: member.email, sub: member.member_id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
