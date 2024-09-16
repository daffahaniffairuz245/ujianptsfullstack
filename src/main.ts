import { NestFactory } from '@nestjs/core';
import { TugasModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(TugasModule);
  app.enableCors()
  app.useGlobalPipes(

    new ValidationPipe({
      
    whitelist:true,
    forbidUnknownValues:true,
    transform: true,
    validateCustomDecorators:true,
    transformOptions :{
      enableImplicitConversion :true
    }
    })


  )

  await app.listen(3000);
}
bootstrap();
