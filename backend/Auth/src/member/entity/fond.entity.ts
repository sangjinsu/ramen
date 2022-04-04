import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fond {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  fond_id: number;

  @Column({ type: 'varchar', name: 'noodle_length' })
  noodleLength: string;

  @Column({ type: 'varchar', name: 'noodle_texture' })
  noodleTexture: string;

  @Column({ type: 'binary', name: 'ingredient_none' })
  ingredientNone: boolean;

  @Column({ type: 'binary', name: 'ingredient_garlic' })
  ingredientGarlic: boolean;

  @Column({ type: 'binary', name: 'ingredient_pepper' })
  ingredientPepper: boolean;

  @Column({ type: 'binary', name: 'ingredient_green_onion' })
  ingredientGreenOnion: boolean;

  @Column({ type: 'varchar', name: 'egg' })
  egg: string;

  @Column({ type: 'binary', name: 'topping_none' })
  toppingNone: boolean;

  @Column({ type: 'binary', name: 'topping_cheese' })
  toppingCheese: boolean;

  @Column({ type: 'binary', name: 'topping_tteok' })
  toppingTteok: boolean;

  @Column({ type: 'binary', name: 'topping_dumpling' })
  toppingDumpling: boolean;

  @Column({ type: 'varchar', name: 'spicy' })
  spicy: string;

  static createFond(options: {
    noodleLength: string;
    noodleTexture: string;
    ingredientNone: boolean;
    ingredientGarlic: boolean;
    ingredientPepper: boolean;
    ingredientGreenOnion: boolean;
    egg: string;
    toppingNone: boolean;
    toppingCheese: boolean;
    toppingDumpling: boolean;
    toppingTteok: boolean;
    spicy: string;
  }) {
    const fond = new Fond();
    fond.noodleLength = options.noodleLength;
    fond.noodleTexture = options.noodleTexture;
    fond.ingredientNone = options.ingredientNone;
    fond.ingredientGarlic = options.ingredientGarlic;
    fond.ingredientPepper = options.ingredientPepper;
    fond.ingredientGreenOnion = options.ingredientGreenOnion;
    fond.egg = options.egg;
    fond.toppingNone = options.toppingNone;
    fond.toppingCheese = options.toppingCheese;
    fond.toppingDumpling = options.toppingDumpling;
    fond.toppingTteok = options.toppingTteok;
    fond.spicy = options.spicy;

    return fond;
  }
}
