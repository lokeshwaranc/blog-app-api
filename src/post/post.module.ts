import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { postProviders } from './post.provider';
import { UserModule } from 'src/users/users.module';
import { PostEmotionsController } from './post_emotions/post_emotions.controller';
import { PostEmotionsService } from './post_emotions/post_emotions.service';
import { postEmotionProvider } from './post_emotions/post_emotions.provider';


@Module({
  imports:[UserModule],
  controllers: [PostController,PostEmotionsController],
  providers: [PostService,...postProviders,PostEmotionsService,...postEmotionProvider],
  exports:[PostService]
})
export class PostModule {}
