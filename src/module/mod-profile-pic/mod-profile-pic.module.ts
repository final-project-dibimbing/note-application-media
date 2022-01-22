import { Module } from '@nestjs/common';
import { ModProfilePicController } from './mod-profile-pic.controller';
import { ModProfilePicService } from './mod-profile-pic.service';
@Module({
  controllers: [ModProfilePicController],
  providers: [ModProfilePicService],
})
export class ModProfilePicModule {}
