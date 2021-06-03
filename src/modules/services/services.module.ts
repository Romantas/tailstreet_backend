import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServicesProvider } from './services.provider';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService, ...ServicesProvider],
})
export class ServicesModule {}
