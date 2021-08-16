import { Employee } from './entities/employee.entity';

export const EmployeesProvider = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useValue: Employee,
  },
];
