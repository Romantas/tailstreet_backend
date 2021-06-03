import { Injectable, Inject } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { Pet } from './entity/pet.entity';
import { v4 as uuid } from 'uuid';
import * as dotenv from 'dotenv';
import { Vaccination } from './entity/Vaccination.entity';
import { Chip } from './entity/Chip.entity';
import { Tattoo } from './entity/Tattoo.entity';

dotenv.config();

@Injectable()
export class PetsService {
  constructor(
    @Inject('PET_REPOSITORY') private petRepository: typeof Pet,
    @Inject('VACCINATION_REPOSITORY')
    private vaccinationRepository: typeof Vaccination,
    @Inject('CHIP_REPOSITORY')
    private chipRepository: typeof Chip,
    @Inject('TATTOO_REPOSITORY')
    private tattooRepository: typeof Tattoo,
  ) {}
  async findAllByUserId(id: number) {
    return await this.petRepository.findAll({ where: { userId: id } });
  }

  async createPet(createPetDto: any, file: Express.Multer.File) {
    const s3 = new S3();

    const uploadResult =
      file &&
      (await s3
        .upload({
          Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
          Body: file.buffer,
          Key: `uploads/${uuid()}-${file.originalname}`,
        })
        .promise());

    return this.petRepository.create({
      ...createPetDto,
      photo: file && uploadResult.Location,
    });
  }

  update(id: number, updatePetDto: any) {
    return this.petRepository.update(updatePetDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.petRepository.destroy({ where: { id } });
  }

  async createVaccination(createVaccinationDto: any) {
    return this.vaccinationRepository.create(createVaccinationDto);
  }

  async findAllPetVaccination(id: number) {
    return this.vaccinationRepository.findAll({ where: { petId: id } });
  }

  async createChip(createChipDto: any) {
    return this.chipRepository.create(createChipDto);
  }

  async findPetChip(id: number) {
    return this.chipRepository.findOne({ where: { petId: id } });
  }

  async createTattoo(createTattooDto: any) {
    return this.tattooRepository.create(createTattooDto);
  }

  async findPetTattoo(id: number) {
    return this.tattooRepository.findOne({
      where: {
        petId: id,
      },
    });
  }
}
