import { CacheModule, Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Fond } from './entity/fond.entity';
import { MemberLikeRamen } from './entity/memberLikeRamen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Member, Fond, MemberLikeRamen]),
    CacheModule.register(),
  ],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
