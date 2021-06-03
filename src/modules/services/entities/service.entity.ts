import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';

import { CompanyInfo } from '../../company-info/entities/company-info.entity';
import { Reservation } from '../../reservations/entities/reservation.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { EmployeeService } from '../../../core/database/many-to-many/EmployeeService';

@Table
export class Service extends Model<Service> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  cost: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration: number;

  @ForeignKey(() => CompanyInfo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyId: number;

  @BelongsTo(() => CompanyInfo)
  company: CompanyInfo;

  @HasMany(() => Reservation)
  reservations: Reservation[];

  @BelongsToMany(() => Employee, () => EmployeeService)
  employees: Employee[];
}
