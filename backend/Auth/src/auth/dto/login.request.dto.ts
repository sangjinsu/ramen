import { PickType } from '@nestjs/swagger';
import { SignupRequestDto } from 'src/members/dto/signup.request.dto';

export class LoginRequestDto extends PickType(SignupRequestDto, [
  'inputEmail',
  'inputPw',
] as const) {}
