import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import {
  chipProviders,
  petsProviders,
  TattooProviders,
  vaccinationProviders,
} from './pets.providers';

@Module({
  controllers: [PetsController],
  providers: [
    PetsService,
    ...petsProviders,
    ...vaccinationProviders,
    ...chipProviders,
    ...TattooProviders,
  ],
})
export class PetsModule {}
