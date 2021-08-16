import { Pet } from './entity/pet.entity';

export const petsProviders = [
  {
    provide: 'PET_REPOSITORY',
    useValue: Pet,
  },
];
