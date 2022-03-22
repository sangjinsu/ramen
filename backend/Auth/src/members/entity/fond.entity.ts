import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fond {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  fond_id: number;

  @Column({ type: 'varchar' })
  noodleLength: string;

  @Column({ type: 'varchar' })
  noodleTexture: string;

  @Column({ type: 'binary' })
  ingredientNone: boolean;

  @Column({ type: 'binary' })
  ingredientGarlic: boolean;

  @Column({ type: 'binary' })
  ingredientPepper: boolean;

  @Column({ type: 'binary' })
  ingredientGreenOnion: boolean;

  @Column({ type: 'varchar' })
  egg: string;

  @Column({ type: 'binary' })
  toppingNone: boolean;

  @Column({ type: 'binary' })
  toppingCheese: boolean;

  @Column({ type: 'binary' })
  toppingTteok: boolean;

  @Column({ type: 'binary' })
  toppingDumpling: boolean;

  @Column({ type: 'varchar' })
  spicy: string;
}
