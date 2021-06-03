import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Pet } from './pet.entity';

@Table
export class Tattoo extends Model<Tattoo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tattooNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tattooPlace: string;

  @ForeignKey(() => Pet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  petId: number;

  @BelongsTo(() => Pet)
  pet: Pet;
}
