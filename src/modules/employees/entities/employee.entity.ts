import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';

import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { EmployeeWork } from './EmployeeWork.entity';
import { Service } from '../../services/entities/service.entity';
import { EmployeeService } from '../../../core/database/many-to-many/EmployeeService';

@Table
export class Employee extends Model<Employee> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  experience: string;

  @ForeignKey(() => CompanyInfo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyId: number;

  @BelongsTo(() => CompanyInfo)
  companyInfo: CompanyInfo;

  @BelongsToMany(() => Service, () => EmployeeService)
  services: Service[];

  @HasMany(() => EmployeeWork)
  employeeWorks: EmployeeWork[];
}
