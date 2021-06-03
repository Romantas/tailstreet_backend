import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesProvider, EmployeesWorkProvider } from './employees.provider';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, ...EmployeesProvider, ...EmployeesWorkProvider],
})
export class EmployeesModule {}
