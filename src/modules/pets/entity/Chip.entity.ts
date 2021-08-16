import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Pet } from './pet.entity';

@Entity()
export class Chip extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chipNumber: string;

  @Column()
  chipPlace: string;
}
