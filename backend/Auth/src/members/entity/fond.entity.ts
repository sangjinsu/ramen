import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  fond_id: number;

  @Column({ type: 'varchar' })
  noodleLength: string;

  @Column({ type: 'varchar' })
  noodleTexture: string;

  @Column({ type: 'varchar' })
  ingredient: string;

  @Column()
  egg: string;
}
