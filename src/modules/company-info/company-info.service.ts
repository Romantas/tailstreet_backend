import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyInfoDto } from './dto/create-company-info.dto';
import { UpdateCompanyInfoDto } from './dto/update-company-info.dto';
import { CompanyInfo } from './entities/company-info.entity';
import { Service } from '../services/entities/service.entity';
import { Op } from 'sequelize';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import * as dotenv from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config();

@Injectable()
export class CompanyInfoService {
  constructor(
    @InjectRepository(CompanyInfo)
    private readonly companyInfoRepository: Repository<CompanyInfo>,
  ) {}
  async create(
    id: number,
    createCompanyInfoDto: any,
    file: Express.Multer.File,
  ) {
    // const s3 = new S3();
    // const uploadResult = await s3
    //   .upload({
    //     Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
    //     Body: file.buffer,
    //     Key: `uploads/${uuid()}-${file.originalname}`,
    //   })
    //   .promise();
    // console.log(uploadResult);
    // return this.companyInfoRepository.create({
    //   ...createCompanyInfoDto,
    //   userId: id,
    //   image: uploadResult.Location,
    // });
  }

  findAll() {
    // return this.companyInfoRepository.findAll();
  }

  findOne(id: number) {
    // return this.companyInfoRepository.findOne<CompanyInfo>({ where: { id } });
  }

  update(id: number, updateCompanyInfoDto: any) {
    // return this.companyInfoRepository.update(updateCompanyInfoDto, {
    //   where: { id },
    // });
  }

  remove(id: number) {
    // return this.companyInfoRepository.destroy({ where: { id } });
  }

  search(service: string, city: string, address: string) {
    // return this.companyInfoRepository.findAll({
    //   where: {
    //     [Op.and]: {
    //       city: city,
    //       address: { [Op.like]: '%' + address + '%' },
    //     },
    //   },
    //   include: [
    //     {
    //       model: Service,
    //       where: { title: service },
    //     },
    //   ],
    // });
  }
}
