import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import {commentProvider} from './comments.provider'
import { PostService } from 'src/post/post.service';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/users/users.module';

@Module({
  imports:[PostModule,UserModule],
  controllers: [CommentsController],
  providers: [CommentsService,...commentProvider],
})
export class CommentsModule {}
