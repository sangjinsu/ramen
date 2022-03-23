import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupRequestDto } from './dto/signup.request.dto';
import * as bcrypt from 'bcrypt';
import { Fond } from './entity/fond.entity';
import { MemberLikeRamen } from './entity/memberLikeRamen.entity';
import { MembersRepository } from './repository/member.repository';
import { FondRepository } from './repository/fond.repository';
import { MemberLikeRamenRepository } from './repository/memberLikeRamen.repository';

@Injectable()
export class MembersService {
  constructor(
    private readonly membersRepository: MembersRepository,
    private readonly fondRepository: FondRepository,
    private readonly memberLikeRamenRepository: MemberLikeRamenRepository,
  ) {}

  async signup(body: SignupRequestDto) {
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

    const isMemberExist = await this.membersRepository.findOne({
      where: { email: inputEmail },
    });

    if (isMemberExist) {
      throw new UnauthorizedException('해당하는 멤버가 이미 존재합니다.');
    }

    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const hashedPassword = await bcrypt.hash(inputPw, salt);

    const fond = this.fondRepository.create({
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
    const newFond = await this.fondRepository.save(fond);

    const member = this.membersRepository.create({
      email: inputEmail,
      name: inputName,
      gender: inputGender,
      age: inputAge,
      password: hashedPassword,
      fond_id: newFond.fond_id,
    });
    const newMember = await this.membersRepository.save(member);

    selectRamens.forEach((ramen_id) => {
      const memberLikeRamen = this.memberLikeRamenRepository.create({
        member_id: newMember.member_id,
        ramen_id,
      });
      this.memberLikeRamenRepository.save(memberLikeRamen);
    });

    return newMember;
  }
}
