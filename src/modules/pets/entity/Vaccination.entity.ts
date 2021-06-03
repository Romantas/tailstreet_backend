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
export class Vaccination extends Model<Vaccination> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vaccinationManufactor: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bachNumber: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  validUntil: Date;

  @ForeignKey(() => Pet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  petId: number;

  @BelongsTo(() => Pet)
  pet: Pet;
}
