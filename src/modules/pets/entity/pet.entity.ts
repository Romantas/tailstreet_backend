import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';

import { User } from '../../users/entity/user.entity';
import { Chip } from './Chip.entity';
import { Tattoo } from './Tattoo.entity';
import { Vaccination } from './Vaccination.entity';

@Table
export class Pet extends Model<Pet> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  species: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  breed: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sex: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  color: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  photo: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Chip)
  chips: Chip[];

  @HasMany(() => Tattoo)
  tattoos: Tattoo[];

  @HasMany(() => Vaccination)
  vaccinations: Vaccination[];
}
