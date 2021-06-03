import { Chip } from './entity/Chip.entity';
import { Pet } from './entity/pet.entity';
import { Tattoo } from './entity/Tattoo.entity';
import { Vaccination } from './entity/Vaccination.entity';

export const petsProviders = [
  {
    provide: 'PET_REPOSITORY',
    useValue: Pet,
  },
];

export const vaccinationProviders = [
  {
    provide: 'VACCINATION_REPOSITORY',
    useValue: Vaccination,
  },
];

export const chipProviders = [
  {
    provide: 'CHIP_REPOSITORY',
    useValue: Chip,
  },
];

export const TattooProviders = [
  {
    provide: 'TATTOO_REPOSITORY',
    useValue: Tattoo,
  },
];
