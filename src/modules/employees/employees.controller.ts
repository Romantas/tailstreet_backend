import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.employeesService.findAll(+id);
  }

  @Get(':id/service')
  findAllForServices(@Param('id') id: string) {
    return this.employeesService.findAllForServices(+id);
  }

  @Get('services/:id')
  findAllWithServices(@Param('id') id: string) {
    return this.employeesService.findAllWithServices(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeesService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }

  @Get('work/:id')
  getAllWork(@Param('id') id: string) {
    return this.employeesService.getAllDayByEmployee(+id);
  }

  @Post('work')
  createWork(@Body() createEmployeeWorkDto: any) {
    return this.employeesService.createEmployeeDay(createEmployeeWorkDto);
  }
}
