import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Review } from './entity/review.entity';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forFeature([User, Review])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
