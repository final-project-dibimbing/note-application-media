import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModProfilePicModule } from './module/mod-profile-pic/mod-profile-pic.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
const str = __dirname + '/upload';
console.log(str)
@Module({
  imports: [

    ModProfilePicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
