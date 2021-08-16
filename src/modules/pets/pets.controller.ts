import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllByUserId(@Request() req) {
    console.log(req.user);
    return this.petsService.findAllByUserId(1);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  creatPet(
    @Body() createPetDto: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.petsService.createPet(createPetDto, file);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: any) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }

  @Get('vaccination/:id')
  getPetVaccination(@Param('id') id: string) {
    return this.petsService.findAllPetVaccination(+id);
  }

  @Post('vaccination')
  createVaccination(@Body() createVaccinationDto: any) {
    return this.petsService.createVaccination(createVaccinationDto);
  }

  @Get('chip/:id')
  getPetChip(@Param('id') id: string) {
    return this.petsService.findPetChip(+id);
  }

  @Post('chip')
  createChip(@Body() createChipDto: any) {
    return this.petsService.createChip(createChipDto);
  }

  @Get('tattoo/:id')
  getPetTattoo(@Param('id') id: string) {
    return this.petsService.findPetTattoo(+id);
  }

  @Post('tattoo')
  createTattoo(@Body() createTattooDto: any) {
    return this.petsService.createTattoo(createTattooDto);
  }
}
