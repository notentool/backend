import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfiguriere die CORS-Einstellungen
  const corsOptions: cors.CorsOptions = {
    origin: 'https://michal-elia-hochzeit.vercel.app', // Hier sollte die URL deines Frontends stehen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

  app.use(cors(corsOptions));

  await app.listen(3001); // Ändere den Port auf 3001
}

bootstrap();
