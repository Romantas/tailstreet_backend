import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EmployeeSchedule } from './EmployeeSchedule.entity';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  experience: string;

  @ManyToOne(() => CompanyInfo, (companyInfo) => companyInfo.employees)
  company: CompanyInfo;

  @ManyToOne(() => Reservation, (reservation) => reservation.employee)
  reservations: Reservation[];

  @OneToMany(
    () => EmployeeSchedule,
    (employeeSchedule) => employeeSchedule.employee,
  )
  employeeSchedule: EmployeeSchedule[];
}
