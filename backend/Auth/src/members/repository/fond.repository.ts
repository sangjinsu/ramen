import { EntityRepository, Repository } from 'typeorm';
import { Fond } from '../entity/fond.entity';

@EntityRepository(Fond)
export class FondRepository extends Repository<Fond> {}
