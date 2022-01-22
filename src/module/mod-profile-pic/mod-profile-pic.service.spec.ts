import { Test, TestingModule } from '@nestjs/testing';
import { ModProfilePicService } from './mod-profile-pic.service';

describe('ModProfilePicService', () => {
  let service: ModProfilePicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModProfilePicService],
    }).compile();

    service = module.get<ModProfilePicService>(ModProfilePicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
