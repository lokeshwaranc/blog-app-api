import { PartialType } from '@nestjs/mapped-types';
import { CreatePostEmotionDto } from './create-post_emotion.dto';

export class UpdatePostEmotionDto extends PartialType(CreatePostEmotionDto) {}
