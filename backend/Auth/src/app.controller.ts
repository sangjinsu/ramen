import {
  Controller,
  UseGuards,
  Post,
  Request,
  Res,
  Req,
  Get,
} from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { Request } from 'express'

@Controller('v1/member')
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) response) {
    const { access_token } = await this.authService.login(req.user)
    response.cookie('Authorization', access_token)
  }

  // jwt 체크
  @UseGuards(JwtAuthGuard)
  @Get('check')
  getProfile(@Req() request: Request) {
    request.cookies
  }
}
