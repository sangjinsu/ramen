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
  member_id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  gender: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'int' })
  age: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'bigint' })
  fond_id: number;

  static createMember(options: {
    age: number;
    gender: string;
    email: string;
    name: string;
    hashedPassword: string;
    fond_id: number;
  }) {
    const member = new Member();
    member.age = options.age;
    member.gender = options.gender;
    member.email = options.email;
    member.name = options.name;
    member.password = options.hashedPassword;
    member.created_at = new Date();
    member.updated_at = new Date();
    member.fond_id = options.fond_id;

    return member;
  }
}
