import { Employee } from './entities/employee.entity';
import { EmployeeWork } from './entities/EmployeeWork.entity';

export const EmployeesProvider = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useValue: Employee,
  },
];

export const EmployeesWorkProvider = [
  {
    provide: 'EMPLOYEE_WORK_REPOSITORY',
    useValue: EmployeeWork,
  },
];
