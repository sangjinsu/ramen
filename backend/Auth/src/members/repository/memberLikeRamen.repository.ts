import { EntityRepository, Repository } from 'typeorm';
import { MemberLikeRamen } from '../entity/memberLikeRamen.entity';

@EntityRepository(MemberLikeRamen)
export class MemberLikeRamenRepository extends Repository<MemberLikeRamen> {}
