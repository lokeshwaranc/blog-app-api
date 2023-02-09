import { PostEmotion } from '../post_emotions/entities/post_emotion.entity';
import { POST_EMOTION_REPOSITORY } from '../../commons/constants';

export const postEmotionProvider = [
  {
    provide: POST_EMOTION_REPOSITORY,
    useValue: PostEmotion,
  },
];