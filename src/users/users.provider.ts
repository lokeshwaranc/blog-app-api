import { User } from './user.entity';
import { USER_REPOSITORY } from '../commons/constants';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
