import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from './user.entity';
import { CompanyInfo } from '../../company-info/entities/company-info.entity';

@Table
export class Review extends Model<Review> {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  stars: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => CompanyInfo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyId: number;

  @BelongsTo(() => CompanyInfo)
  company: CompanyInfo;
}
