import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findByUserId(@Param('id') id: string) {
    return this.reservationsService.findByUserId(+id);
  }

  @Get('employee/:id')
  findByEmployeeId(@Param('id') id: string) {
    return this.reservationsService.findByEmployeeId(+id);
  }

  @Get('company/:id')
  findByCompanyId(@Param('id') id: string) {
    return this.reservationsService.findByCompanyId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Put('status/:status/:id')
  updateStatus(@Param('id') id: string, @Param('status') status: string) {
    return this.reservationsService.updateStatus(+id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
