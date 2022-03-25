import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MemberService } from 'src/member/member.service';
import { Public } from 'src/skip-auth.decorator';
import { AuthService } from './auth.service';
import { SignupRequestDto } from './dto/signup.request.dto';
import { JwtRefreshGuard } from './guard/jwt-refresh.guard';

@Controller('v1/member')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly memberService: MemberService,
  ) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body, @Res({ passthrough: true }) res: Response) {
    const { inputEmail, inputPw } = body;

    const member = await this.authService.vaildateMember(inputEmail, inputPw);
    if (!member) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다');
    }

    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(member.member_id);

    const { refreshToken, ...refreshOption } =
      this.authService.getCookieWithJwtRefreshToken(member.member_id);

    await this.memberService.setCurrentRefreshToken(
      refreshToken,
      member.member_id,
    );

    res.cookie('Authentication', accessToken, accessOption);
    res.cookie('Refresh', refreshToken, refreshOption);

    return member;
  }

  @Post('logout')
  async logOut(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { accessOption, refreshOption } =
      this.authService.getCookiesForLogOut();

    await this.memberService.removeRefreshToken(req.member.member_id);

    res.cookie('Authentication', '', accessOption);
    res.cookie('Refresh', '', refreshOption);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() req, @Res({ passthrough: true }) res: Response) {
    const member = req.member;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(member.member_id);
    res.cookie('Authentication', accessToken, accessOption);
    return member;
  }

  @Public()
  @Post('signup')
  async register(@Body() SignupRequestDto: SignupRequestDto): Promise<any> {
    return this.authService.register(SignupRequestDto);
  }

  @Get('check-jwt')
  async checkJwt(@Req() req: Request) {
    console.log(req);
    return true;
  }
}
