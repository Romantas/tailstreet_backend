import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { Pet } from '../../pets/entity/pet.entity';

import { Review } from './review.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Role {
  USER = 1,
  COMPANY = 2,
  ADMIN = 3,
}
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  role: Role;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];

  @OneToOne(() => CompanyInfo)
  @JoinColumn()
  company: CompanyInfo;
}
