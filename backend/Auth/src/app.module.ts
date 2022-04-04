import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MemberModule, AuthModule],
})
export class AppModule {}
