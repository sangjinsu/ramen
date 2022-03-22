import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Fond } from './entity/fond.entity';
import { MemberLikeRamen } from './entity/memberLikeRamen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Fond, MemberLikeRamen])],
  providers: [MembersService],
  controllers: [MembersController],
})
export class MembersModule {}
