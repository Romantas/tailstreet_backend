import * as dotenv from 'dotenv';

import { CompanyInfo } from '../../modules/company-info/entities/company-info.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { EmployeeService } from './many-to-many/EmployeeService';
import { Pet } from '../../modules/pets/entity/pet.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { Sequelize } from 'sequelize-typescript';
import { Service } from '../../modules/services/entities/service.entity';
import { User } from '../../modules/users/entity/user.entity';
import { Review } from '../../modules/users/entity/review.entity';
import { EmployeeWork } from '../../modules/employees/entities/EmployeeWork.entity';
import { Chip } from '../../modules/pets/entity/Chip.entity';
import { Tattoo } from '../../modules/pets/entity/Tattoo.entity';
import { Vaccination } from '../../modules/pets/entity/Vaccination.entity';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
      });
      sequelize.addModels([
        User,
        Pet,
        CompanyInfo,
        Service,
        Reservation,
        Employee,
        EmployeeService,
        EmployeeWork,
        Chip,
        Tattoo,
        Vaccination,
        Review,
      ]);
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
