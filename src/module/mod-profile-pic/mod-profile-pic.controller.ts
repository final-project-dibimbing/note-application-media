import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  Response,
  StreamableFile,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { ResponseMapping } from "../../response/success/resp_success_non_page";

const { v4 } = require("uuid");
import { diskStorage } from "multer";
import { createReadStream } from "fs";

const str = __dirname;
console.log(str.replace("/module/mod-profile-pic", "/upload"));

@Controller("mod-profile-pic")
export class ModProfilePicController {
  @Post("upload")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary"
        }
      }
    }
  })
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: (req, file, cb) =>
          cb(null, str.replace("/module/mod-profile-pic", "/upload/profile")),
        filename: (req, file, cb) =>
          cb(null, `${v4().replace(/-/g, "")}.${file.mimetype.split("/")[1]}`)
      }),
      preservePath: true
    }),
    ResponseMapping
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      image: `http://api-media.saltnote.my.id/mod-profile-pic/${file.filename}`
    };
  }

  @Get("/:id")
  getFile(@Res() res, @Param() param: any) {
    const file = createReadStream(
      `${str.replace("/module/mod-profile-pic", "/upload/profile")}/${param.id}`
    );
    console.log(`${str.replace("/module/mod-profile-pic", "/upload/profile")}/${param.id}`)
    file.pipe(res);
  }
}
