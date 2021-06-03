import { Review } from './entity/review.entity';
import { User } from './entity/user.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];

export const reviewsProviders = [
  {
    provide: 'REVIEW_REPOSITORY',
    useValue: Review,
  },
];
