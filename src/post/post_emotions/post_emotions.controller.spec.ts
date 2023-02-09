import { Test, TestingModule } from '@nestjs/testing';
import { PostEmotionsController } from './post_emotions.controller';
import { PostEmotionsService } from './post_emotions.service';

describe('PostEmotionsController', () => {
  let controller: PostEmotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostEmotionsController],
      providers: [PostEmotionsService],
    }).compile();

    controller = module.get<PostEmotionsController>(PostEmotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
