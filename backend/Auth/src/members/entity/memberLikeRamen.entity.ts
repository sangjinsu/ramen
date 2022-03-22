import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MemberLikeRamen {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  member_like_ramen_id: number;

  @Column({ type: 'bigint' })
  member_id: number;

  @Column({ type: 'bigint' })
  ramen_id: number;
}
