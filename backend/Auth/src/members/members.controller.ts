import { Body, Controller, Post } from '@nestjs/common';
import { SignupRequestDto } from './dto/signup.request.dto';
import { MembersService } from './members.service';

@Controller('v1/member')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post('signup')
  async signup(@Body() body: SignupRequestDto) {
    console.log(body);
    return this.membersService.signup(body);
  }

  @Post('login')
  async login() {
    return 'login';
  }

  @Post('logout')
  async logout() {
    return 'logout';
  }
}
