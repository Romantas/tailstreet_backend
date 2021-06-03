import { CompanyInfoController } from './company-info.controller';
import { CompanyInfoService } from './company-info.service';
import { Module } from '@nestjs/common';
import { companyInfoProvider } from './company-info.providers';

@Module({
  controllers: [CompanyInfoController],
  providers: [CompanyInfoService, ...companyInfoProvider],
})
export class CompanyInfoModule {}
