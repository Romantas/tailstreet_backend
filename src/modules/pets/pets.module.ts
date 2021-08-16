import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chip } from './entity/Chip.entity';
import { Pet } from './entity/pet.entity';
import { Tattoo } from './entity/Tattoo.entity';
import { Vaccination } from './entity/Vaccination.entity';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Tattoo, Chip, Vaccination])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
