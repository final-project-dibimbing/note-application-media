import { ApiProperty } from "@nestjs/swagger";

export class ProfileReq {
  @ApiProperty()
  file: Express.Multer.File;
}
