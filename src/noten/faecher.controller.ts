// faecher.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Fach } from './fach.entity'; 
import { Prüfung } from './pruefung.entity';  // Importiere die Prüfungsentität
import { FaecherService } from './faecher.service';

@Controller('faecher')
export class FaecherController {
  constructor(private readonly faecherService: FaecherService) { }

  @Get()
  async findAll(): Promise<Fach[]> {
    return this.faecherService.readFaecher();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Fach> {
    return this.faecherService.findFachById(id);
  }

  @Get(':id/pruefungen')
  async findPruefungenForFach(@Param('id') id: number): Promise<Prüfung[]> {
    return this.faecherService.findPruefungenForFach(id);
  }

  @Post()
  async create(@Body() fach: Fach): Promise<Fach> {
    return this.faecherService.createFach(fach);
  }

  // Diese Methode erstellt eine Prüfung und weist sie einem Fach zu
  @Post(':id/pruefungen')
  async createPruefung(@Param('id') id: number, @Body() pruefungData: Prüfung): Promise<Prüfung> {
    const fach = await this.faecherService.findFachById(id);
    pruefungData.fach = fach; // Weise der Prüfung das Fach zu
    return this.faecherService.createPruefung(pruefungData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newFach: Fach): Promise<void> {
    await this.faecherService.updateFach(id, newFach);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.faecherService.deleteFach(id);
  }
}
