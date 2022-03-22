import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Member {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  member_id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  sex: string

  @Column({ type: 'varchar' })
  password: string

  @Column({ type: 'bigint' })
  fond_id: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
