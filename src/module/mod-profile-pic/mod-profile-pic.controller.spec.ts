import { Test, TestingModule } from '@nestjs/testing';
import { ModProfilePicController } from './mod-profile-pic.controller';

describe('ModProfilePicController', () => {
  let controller: ModProfilePicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModProfilePicController],
    }).compile();

    controller = module.get<ModProfilePicController>(ModProfilePicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
