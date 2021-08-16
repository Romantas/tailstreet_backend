import { User } from '../../users/entity/user.entity';
import { Service } from '../../services/entities/service.entity';
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
} from 'typeorm';
import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Pet } from 'src/modules/pets/entity/pet.entity';

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column({ nullable: true })
  accepted: boolean;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @ManyToOne(() => Service, (service) => service.reservations)
  service: Service;

  @ManyToOne(() => CompanyInfo, (companyInfo) => companyInfo.reservations)
  company: CompanyInfo;

  @ManyToOne(() => Employee, (employee) => employee.reservations)
  employee: Employee;

  @ManyToOne(() => Pet, (pet) => pet.reservations)
  pet: Pet;
}
