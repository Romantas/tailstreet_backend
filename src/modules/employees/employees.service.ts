import { Injectable, Inject } from '@nestjs/common';
import { format } from 'date-fns';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeWork } from './entities/EmployeeWork.entity';
import { Service } from '../services/entities/service.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof Employee,
    @Inject('EMPLOYEE_WORK_REPOSITORY')
    private employeeWorkRepository: typeof EmployeeWork,
  ) {}

  async create(createEmployeeDto: any) {
    console.log(createEmployeeDto);
    const employee = await this.employeeRepository.create(createEmployeeDto);
    employee.$add('services', createEmployeeDto.select);

    for (
      let d = new Date(createEmployeeDto.date[0]);
      d <= new Date(createEmployeeDto.date[1]);
      d.setDate(d.getDate() + 1)
    ) {
      console.log(format(d, 'yyyy-MM-dd'));
      this.createEmployeeDay({
        employeeId: employee.id,
        day: format(d, 'yyyy-MM-dd'),
        startFrom: createEmployeeDto.time[0],
        startTo: createEmployeeDto.time[1],
      });
    }

    return employee;
  }

  findAll(id: number) {
    return this.employeeRepository.findAll({ where: { companyId: id } });
  }

  findAllForServices(id: number) {
    return this.employeeRepository.findAll({
      include: [
        {
          model: Service,
          where: { id },
        },
      ],
    });
  }

  findAllWithServices(id: number) {
    return this.employeeRepository.findAll({
      where: { companyId: id },
      include: [{ model: Service }],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  async getAllDayByEmployee(id: number) {
    console.log('itWorks');
    return this.employeeWorkRepository.findAll({ where: { employeeId: id } });
  }

  async createEmployeeDay(createEmployeeDay: any) {
    return this.employeeWorkRepository.create(createEmployeeDay);
  }
}
