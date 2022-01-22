import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("Media")
    .setDescription("Media Module")
    .addTag("Media")
    .addServer(
      process.env.ENVIRONTMENT == "dev"
        ? "http://localhost:3002"
        : "http://api-media.saltnote.my.id/",
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-media", app, document);
  app.enableCors();
  await app.listen(3002);
}

bootstrap();
