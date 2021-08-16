import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { Service } from 'src/modules/services/entities/service.entity';
import { Review } from 'src/modules/users/entity/review.entity';
import { User } from 'src/modules/users/entity/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CompanyInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Service, (service) => service.company)
  services: Service[];

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  @OneToMany(() => Review, (review) => review.company)
  reviews: Review[];

  @OneToMany(() => Reservation, (reservation) => reservation.company)
  reservations: Reservation[];
}
