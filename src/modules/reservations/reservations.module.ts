import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsProvider } from './reservations.provider';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService, ...ReservationsProvider],
})
export class ReservationsModule {}
