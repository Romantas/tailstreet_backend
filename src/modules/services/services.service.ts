import { Injectable, Inject } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { cities, addresses } from '../../utils/addresses';

@Injectable()
export class ServicesService {
  constructor(
    @Inject('SERVICE_REPOSITORY')
    private servicesRepository: typeof Service,
  ) {}
  async create(createServiceDto: any) {
    return this.servicesRepository.create(createServiceDto);
  }

  async findAll() {
    return this.servicesRepository.findAll({
      attributes: ['title'],
      group: ['title'],
      order: [['title', 'ASC']],
    });
  }

  findByCompanyId(id: number) {
    return this.servicesRepository.findAll({ where: { companyId: id } });
  }

  createByCompanyId(id: number, data) {
    return this.servicesRepository.create({ ...data, companyId: id });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.servicesRepository.update(updateServiceDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.servicesRepository.destroy({ where: { id: id } });
  }

  getCities() {
    return cities;
  }

  getAddress(city) {
    return addresses[city];
  }
}
