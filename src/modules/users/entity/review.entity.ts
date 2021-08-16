import { User } from './user.entity';
import { CompanyInfo } from '../../company-info/entities/company-info.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  stars: number;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ManyToOne(() => CompanyInfo, (companyInfo) => companyInfo.reviews)
  company: CompanyInfo;
}
