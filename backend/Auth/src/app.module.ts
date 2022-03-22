import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { MemberModule } from './member/member.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true
    }),
    MemberModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
