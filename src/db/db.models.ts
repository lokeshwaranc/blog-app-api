
import { Comment } from '../post/comments/entities/comment.entity';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/users/user.entity';
import { PostEmotion } from 'src/post/post_emotions/entities/post_emotion.entity';

export const ALL_MODELS = [
    User,
    Post,
    Comment,
    PostEmotion
]