import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Pet } from './pet.entity';

@Entity()
export class Vaccination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vaccinationManufacture: string;

  @Column()
  bachNumber: string;

  @Column()
  validUntil: Date;

  @ManyToOne(() => Pet, (pet) => pet.vaccinations)
  pet: Pet;
}
