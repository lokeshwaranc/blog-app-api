import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ResponseTransformInterceptor } from 'src/commons/interceptor/response_transform.interceptor';
import { Post as post } from './entities/post.entity';

@Controller('post')
@UseInterceptors(ResponseTransformInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto):Promise<post> {
    return this.postService.create(createPostDto);
  }

  @Get(':id/get')
  findOne(@Param('id') id: string):Promise<post> {
    return this.postService.findOne(+id);
  }

  @Patch('update')
  update(@Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(updatePostDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
