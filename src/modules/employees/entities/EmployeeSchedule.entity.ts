import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import { Employee } from './employee.entity';

@Entity()
export class EmployeeSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  startFrom: Date;

  @Column()
  startTo: Date;

  @ManyToOne(() => Employee, (employee) => employee.employeeSchedule)
  employee: Employee;
}
