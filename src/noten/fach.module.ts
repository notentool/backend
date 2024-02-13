// fach.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaecherController } from './faecher.controller';
import { FaecherService } from './faecher.service';
import { Fach } from './fach.entity';
import { Prüfung } from './pruefung.entity'; // Importiere die Prüfungsentität

@Module({
  imports: [TypeOrmModule.forFeature([Fach, Prüfung])], // Füge die Prüfungsentität hinzu
  controllers: [FaecherController],
  providers: [FaecherService],
})
export class FachModule {}
