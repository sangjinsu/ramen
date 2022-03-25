import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { MemberService } from 'src/member/member.service';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.request.dto';
import { SignupRequestDto } from './dto/signup.request.dto';
import { JwtRefreshGuard } from './guard/jwt-refresh.guard';
import { JwtAuthGuard } from './guard/jwt.guard';

@Controller('v1/member')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly memberService: MemberService,
  ) {}
  @Post('signup')
  async register(@Body() SignupRequestDto: SignupRequestDto): Promise<any> {
    const member = await this.authService.register(SignupRequestDto);

    const accessToken = this.authService.getJwtAccessToken(member);

    const refreshToken = await this.authService.getJwtRefreshToken(member);

    await this.memberService.setCurrentRefreshToken(
      refreshToken,
      member.member_id,
    );

    return {
      member_id: member.member_id,
      name: member.name,
      accessToken,
      refreshToken,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequestDto: LoginRequestDto) {
    const { inputEmail, inputPw } = loginRequestDto;

    const member = await this.authService.vaildateMember(inputEmail, inputPw);
    if (!member) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다');
    }

    const accessToken = this.authService.getJwtAccessToken(member);
    const refreshToken = await this.authService.getJwtRefreshToken(member);
    await this.memberService.setCurrentRefreshToken(
      refreshToken,
      member.member_id,
    );
    return {
      member_id: member.member_id,
      name: member.name,
      accessToken,
      refreshToken,
    };
  }

  @Post('logout')
  async logOut(@Req() req) {
    await this.memberService.removeRefreshToken(req.member.member_id);
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() req) {
    const member = req.user;
    const accessToken = this.authService.getJwtAccessToken(member);
    return { accessToken };
  }

  @UseGuards(JwtAuthGuard)
  @Get('check-jwt')
  checkJwt() {
    return true;
  }
}
