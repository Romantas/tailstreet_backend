import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Pet } from './pet.entity';

@Entity()
export class Tattoo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tattooNumber: string;

  @Column()
  tattooPlace: string;
}
