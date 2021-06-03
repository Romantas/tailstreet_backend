import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { Pet } from '../../pets/entity/pet.entity';

import { Review } from './review.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
  })
  role: string;

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => Reservation)
  reservations: Reservation[];

  @HasMany(() => Pet)
  pets: Pet[];

  @HasOne(() => CompanyInfo)
  company: CompanyInfo;
}
