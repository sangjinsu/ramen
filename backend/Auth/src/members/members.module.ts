import { forwardRef, Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Fond } from './entity/fond.entity';
import { MemberLikeRamen } from './entity/memberLikeRamen.entity';
import { AuthModule } from 'src/auth/auth.module';
import { MembersRepository } from './repository/member.repository';
import { FondRepository } from './repository/fond.repository';
import { MemberLikeRamenRepository } from './repository/memberLikeRamen.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Member,
      Fond,
      MemberLikeRamen,
      MembersRepository,
      FondRepository,
      MemberLikeRamenRepository,
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [MembersService, MembersRepository],
  controllers: [MembersController],
  exports: [MembersRepository],
})
export class MembersModule {}
