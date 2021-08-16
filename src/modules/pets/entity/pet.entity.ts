import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../users/entity/user.entity';
import { Chip } from './Chip.entity';
import { Tattoo } from './Tattoo.entity';
import { Vaccination } from './Vaccination.entity';

@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  species: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(() => User, (user) => user.pets)
  user: User;

  @OneToOne(() => Chip)
  @JoinColumn()
  chip: Chip;

  @OneToOne(() => Tattoo)
  @JoinColumn()
  tattoo: Tattoo;

  @OneToMany(() => Vaccination, (vaccination) => vaccination.pet)
  vaccinations: Vaccination[];

  @OneToMany(() => Reservation, (reservation) => reservation.pet)
  reservations: Reservation[];
}
