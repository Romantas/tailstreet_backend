import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyInfoModule } from './modules/company-info/company-info.module';
import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { UsersModule } from './modules/users/users.module';
import { ServicesModule } from './modules/services/services.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Admin as AdminModule } from './admin-panel/admin.module';
import { AuthModule } from './modules/auth/auth.module';

dotenv.config();
@Module({
  imports: [
    UsersModule,
    PetsModule,
    CompanyInfoModule,
    ServicesModule,
    ReservationsModule,
    EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
