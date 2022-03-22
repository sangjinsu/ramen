import { Body, Controller, Post } from '@nestjs/common';

@Controller('v1/member')
export class MembersController {
  @Post('signup')
  async signup(@Body() body) {
    console.log(body);
    return 'signup';
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
