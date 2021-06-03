import { CreateCompanyInfoDto } from './create-company-info.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCompanyInfoDto extends PartialType(CreateCompanyInfoDto) {}
