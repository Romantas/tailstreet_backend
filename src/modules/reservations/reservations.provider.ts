import { Reservation } from './entities/reservation.entity';

export const ReservationsProvider = [
  {
    provide: 'RESERVATION_REPOSITORY',
    useValue: Reservation,
  },
];
