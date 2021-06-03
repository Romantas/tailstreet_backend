import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { User } from '../../users/entity/user.entity';
import { Service } from '../../services/entities/service.entity';

@Table
export class Reservation extends Model<Reservation> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  time: Date;

  @Column({
    type: DataType.TINYINT,
    allowNull: true,
  })
  accepted: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Service)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  serviceId: number;

  @BelongsTo(() => Service)
  service: Service;
}
