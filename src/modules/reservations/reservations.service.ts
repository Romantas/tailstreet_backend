import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}
  async create(createReservationDto: any) {
    // const reservation = await this.reservationRepository.create(
    //   createReservationDto,
    // );
    // const service = await reservation.$get('service');
    // const user = await reservation.$get('user');
    // const company = await service.$get('company');
    // const companyUser = await company.$get('user');
    // const params = {
    //   Destination: {
    //     /* required */
    //     ToAddresses: [
    //       companyUser.email,
    //       /* more items */
    //     ],
    //   },
    //   Message: {
    //     /* required */
    //     Body: {
    //       /* required */
    //       Text: {
    //         Charset: 'UTF-8',
    //         Data: `New reservation created for user: ${user.email} service: ${service.title}`,
    //       },
    //     },
    //     Subject: {
    //       Charset: 'UTF-8',
    //       Data: 'New reservation',
    //     },
    //   },
    //   Source: 'hello.tailstreet@gmail.com' /* required */,
    // };
    // const sendPromise = new SES({ apiVersion: '2010-12-01' })
    //   .sendEmail(params)
    //   .promise();
    // sendPromise
    //   .then(function (data) {
    //     console.log(data.MessageId);
    //   })
    //   .catch(function (err) {
    //     console.error(err, err.stack);
    //   });
    // return reservation;
  }

  findAll() {
    return `This action returns all reservations`;
  }

  findByUserId(id: number) {
    // return this.reservationRepository.findAll({
    //   where: { userId: id },
    //   include: [{ model: Service, include: [{ model: CompanyInfo }] }],
    // });
  }

  findByCompanyId(id: number) {
    // return this.reservationRepository.findAll({
    //   include: [
    //     {
    //       model: Service,
    //       include: [{ model: CompanyInfo, where: { id: id } }],
    //       required: true,
    //     },
    //     {
    //       model: User,
    //     },
    //   ],
    // });
  }

  findByEmployeeId(id: number) {
    // return this.reservationRepository.findAll({
    //   attributes: { include: ['date', 'time'], exclude: ['service'] },
    //   include: [
    //     {
    //       model: Service,
    //       required: true,
    //       include: [{ model: Employee, where: { id: id }, required: true }],
    //     },
    //   ],
    // });
  }

  async updateStatus(id: number, status: string) {
    // const accepted = status === 'accepted' ? true : false;
    // const reservation = await this.reservationRepository.findOne({
    //   where: { id: id },
    // });
    // console.log(reservation);
    // const user = await reservation.$get('user');
    // console.log(user);
    // const service = await reservation.$get('service');
    // console.log(service);
    // const company = await service.$get('company');
    // console.log(company);
    // var params = {
    //   Destination: {
    //     /* required */
    //     ToAddresses: [
    //       user.email,
    //       /* more items */
    //     ],
    //   },
    //   Message: {
    //     /* required */
    //     Body: {
    //       /* required */
    //       Text: {
    //         Charset: 'UTF-8',
    //         Data: `Your reservation at ${company.name} for service: ${
    //           service.title
    //         } was ${accepted ? 'accepted' : 'declined'}`,
    //       },
    //     },
    //     Subject: {
    //       Charset: 'UTF-8',
    //       Data: 'Reservation status',
    //     },
    //   },
    //   Source: 'hello.tailstreet@gmail.com' /* required */,
    // };
    // const sendPromise = new SES({ apiVersion: '2010-12-01' })
    //   .sendEmail(params)
    //   .promise();
    // sendPromise
    //   .then(function (data) {
    //     console.log(data.MessageId);
    //   })
    //   .catch(function (err) {
    //     console.error(err, err.stack);
    //   });
    // return this.reservationRepository.update(
    //   { accepted: accepted },
    //   { returning: true, where: { id: id } },
    // );
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    // return this.reservationRepository.update(updateReservationDto, {
    //   where: { id },
    // });
  }

  remove(id: number) {
    // return this.reservationRepository.destroy({ where: { id } });
  }
}
