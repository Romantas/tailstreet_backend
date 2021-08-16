import AdminBro from 'admin-bro';
import { Module } from '@nestjs/common';
import { AdminModule } from '@admin-bro/nestjs';
import { Database, Resource } from '@admin-bro/typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { Pet } from 'src/modules/pets/entity/pet.entity';
import { CompanyInfo } from 'src/modules/company-info/entities/company-info.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    AdminModule.createAdmin({
      adminBroOptions: {
        rootPath: '/admin',
        resources: [User, Pet, CompanyInfo, Reservation, Employee],
      },
    }),
  ],
})
export class Admin {}
