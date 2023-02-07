import { Comment } from '../comments/entities/comment.entity';
import { COMMENT_REPOSITORY } from '../commons/constants';

export const commentProvider = [
  {
    provide: COMMENT_REPOSITORY,
    useValue: Comment,
  },
];
