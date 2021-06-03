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

import { Service } from '../../services/entities/service.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Review } from '../../users/entity/review.entity';

@Table
export class CompanyInfo extends Model<CompanyInfo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Service)
  services: Service[];

  @HasMany(() => Employee)
  employees: Employee[];

  @HasMany(() => Review)
  review: Review[];
}
