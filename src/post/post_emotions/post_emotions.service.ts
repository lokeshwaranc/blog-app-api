import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {  POST_EMOTION_REPOSITORY } from 'src/commons/constants';
import { UserService } from 'src/users/users.service';
import { PostService } from '../post.service';
import { CreatePostEmotionDto } from './dto/create-post_emotion.dto';
import { UpdatePostEmotionDto } from './dto/update-post_emotion.dto';
import { PostEmotion } from './entities/post_emotion.entity';

@Injectable()
export class PostEmotionsService {

  constructor(@Inject(POST_EMOTION_REPOSITORY)
  private readonly commentRepository: typeof PostEmotion,
  private readonly userService:UserService,
  private readonly postService:PostService){

  }

  async customeCount(){
   return await this.commentRepository.findAll({
      where:{
        emotion:'THUMBS_DOWN'
      }
    })
  }

  async create(createPostEmotionDto: CreatePostEmotionDto) {
    await this.userService.userExist(createPostEmotionDto.userId);
    await this.postService.postExist(createPostEmotionDto.postId)
    return await this.commentRepository.create(createPostEmotionDto);
  }
}
