import { Post } from '../post/entities/post.entity';
import { POST_REPOSITORY } from '../commons/constants';

export const postProviders = [
  {
    provide: POST_REPOSITORY,
    useValue: Post,
  },
];
