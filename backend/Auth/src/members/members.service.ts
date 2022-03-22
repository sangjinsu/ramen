import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupRequestDto } from './dto/signup.request.dto';
import { Member } from './entity/member.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  async signup(body: SignupRequestDto) {
    const { inputEmail, inputPw, inputName, inputAge, inputGender } = body;
    const isMemberExist = await this.membersRepository.findOne({
      where: { email: inputEmail },
    });

    if (isMemberExist) {
      throw new UnauthorizedException('해당하는 멤버가 이미 존재합니다.');
    }

    const saltOrRounds = 10;
    const salt = bcrypt.genSaltSync(saltOrRounds);
    const hashedPassword = bcrypt.hashSync(inputPw, salt);

    const member = await this.membersRepository.create({
      email: inputEmail,
      name: inputName,
      gender: inputGender,
      age: inputAge,
      password: hashedPassword,
    });
  }
}
