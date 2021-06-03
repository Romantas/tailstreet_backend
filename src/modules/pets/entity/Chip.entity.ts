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
export class Chip extends Model<Chip> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  chipNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  chipPlace: string;

  @ForeignKey(() => Pet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  petId: number;

  @BelongsTo(() => Pet)
  pet: Pet;
}
