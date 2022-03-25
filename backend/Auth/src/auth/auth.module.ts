import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MemberModule } from 'src/member/member.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy';

@Module({
  imports: [
    MemberModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
