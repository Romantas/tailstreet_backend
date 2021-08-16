import { CompanyInfoController } from './company-info.controller';
import { CompanyInfoService } from './company-info.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyInfo } from './entities/company-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyInfo])],
  controllers: [CompanyInfoController],
  providers: [CompanyInfoService],
})
export class CompanyInfoModule {}
