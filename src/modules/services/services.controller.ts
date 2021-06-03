import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get('cities')
  findAllCities() {
    return this.servicesService.getCities();
  }

  @Get('address/:city')
  findAllAddress(@Param('city') city: string) {
    return this.servicesService.getAddress(city);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }

  @Get('company/:id')
  findAllById(@Param('id') id: string) {
    return this.servicesService.findByCompanyId(+id);
  }

  @Post('company/:id')
  createByCompanyId(@Param('id') id: string, @Body() body: any) {
    return this.servicesService.createByCompanyId(+id, body);
  }
}
