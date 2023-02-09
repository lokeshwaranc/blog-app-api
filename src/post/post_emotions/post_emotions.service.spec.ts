import { Test, TestingModule } from '@nestjs/testing';
import { PostEmotionsService } from './post_emotions.service';

describe('PostEmotionsService', () => {
  let service: PostEmotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostEmotionsService],
    }).compile();

    service = module.get<PostEmotionsService>(PostEmotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
