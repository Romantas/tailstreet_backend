import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Employee } from './employee.entity';

@Table
export class EmployeeWork extends Model<EmployeeWork> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  day: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  startFrom: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  startTo: Date;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeId: number;

  @BelongsTo(() => Employee)
  EmployeeId: Employee;
}
