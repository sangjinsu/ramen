import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { SignupRequestDto } from './dto/signup.request.dto';
import { MembersService } from './members.service';

@Controller('v1/member')
export class MembersController {
  constructor(
    private readonly membersService: MembersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(@Body() body: SignupRequestDto) {
    return await this.membersService.signup(body);
  }

  @Post('login')
  async login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('check')
  checkJwt(@Req() req: Request) {
    return req.user;
  }

  @Post('logout')
  async logout() {
    return 'logout';
  }
}
