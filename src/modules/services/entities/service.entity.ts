import { CompanyInfo } from '../../company-info/entities/company-info.entity';
import { Reservation } from '../../reservations/entities/reservation.entity';
import { Employee } from '../../employees/entities/employee.entity';
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cost: number;

  @Column()
  duration: number;

  @ManyToOne(() => CompanyInfo, (companyInfo) => companyInfo.services)
  company: CompanyInfo;

  @OneToMany(() => Reservation, (reservation) => reservation.service)
  reservations: Reservation[];

  @ManyToMany(() => Employee)
  @JoinTable()
  employees: Employee[];
}
