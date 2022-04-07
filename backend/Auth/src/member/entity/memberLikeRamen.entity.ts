import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MemberLikeRamen {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  member_like_ramen_id: number;

  @Column({ type: 'bigint' })
  member_id: number;

  @Column({ type: 'bigint' })
  ramen_id: number;

  static createMemberLikeRamen(options: {
    member_id: number;
    ramen_id: number;
  }) {
    const memberLikeRamen = new MemberLikeRamen();
    memberLikeRamen.member_id = options.member_id;
    memberLikeRamen.ramen_id = options.ramen_id;
    return memberLikeRamen;
  }
}
