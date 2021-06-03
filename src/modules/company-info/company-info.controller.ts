import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CompanyInfoService } from './company-info.service';
import { CreateCompanyInfoDto } from './dto/create-company-info.dto';
import { UpdateCompanyInfoDto } from './dto/update-company-info.dto';

@Controller('company-info')
export class CompanyInfoController {
  constructor(private readonly companyInfoService: CompanyInfoService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Param('id') id: string,
    @Body() createCompanyInfoDto: CreateCompanyInfoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(createCompanyInfoDto, file);
    return this.companyInfoService.create(+id, createCompanyInfoDto, file);
  }

  @Get()
  findAll() {
    return this.companyInfoService.findAll();
  }

  @Get(':service/:city/:address')
  search(
    @Param('service') service: string,
    @Param('city') city: string,
    @Param('address') address: string,
  ) {
    return this.companyInfoService.search(service, city, address);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyInfoDto: UpdateCompanyInfoDto,
  ) {
    return this.companyInfoService.update(+id, updateCompanyInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyInfoService.remove(+id);
  }
}
