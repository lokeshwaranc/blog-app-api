import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { PostEmotionsService } from './post_emotions.service';
import { CreatePostEmotionDto } from './dto/create-post_emotion.dto';
import { UpdatePostEmotionDto } from './dto/update-post_emotion.dto';
import { ResponseTransformInterceptor } from 'src/commons/interceptor/response_transform.interceptor';

@Controller('post-emotions')
@UseInterceptors(ResponseTransformInterceptor)
export class PostEmotionsController {
  constructor(private readonly postEmotionsService: PostEmotionsService) {}

  @Post()
  create(@Body() createPostEmotionDto: CreatePostEmotionDto) {
    return this.postEmotionsService.create(createPostEmotionDto);
  }


}
