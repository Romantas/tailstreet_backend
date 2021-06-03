import { Service } from './entities/service.entity';

export const ServicesProvider = [
  {
    provide: 'SERVICE_REPOSITORY',
    useValue: Service,
  },
];
