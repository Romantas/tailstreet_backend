import { CompanyInfo } from './entities/company-info.entity';

export const companyInfoProvider = [
  {
    provide: 'COMPANY_REPOSITORY',
    useValue: CompanyInfo,
  },
];
