import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  DataType,
} from 'sequelize-typescript';

import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Service } from 'src/modules/services/entities/service.entity';

@Table
export class EmployeeService extends Model<EmployeeService> {
  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeId: number;

  @ForeignKey(() => Service)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  serviceId: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @BelongsTo(() => Service)
  service: Service;
}
