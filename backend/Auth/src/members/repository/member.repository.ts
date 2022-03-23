import { EntityRepository, Repository } from 'typeorm';
import { Member } from '../entity/member.entity';

@EntityRepository(Member)
export class MembersRepository extends Repository<Member> {}
