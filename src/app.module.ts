import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyInfoModule } from './modules/company-info/company-info.module';
import { DatabaseModule } from './core/database/database.module';
import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { UsersModule } from './modules/users/users.module';
import { ServicesModule } from './modules/services/services.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PetsModule, DatabaseModule, CompanyInfoModule, ServicesModule, ReservationsModule, EmployeesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
