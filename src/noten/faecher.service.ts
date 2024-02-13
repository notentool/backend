// faecher.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Fach } from './fach.entity'; 
import { Prüfung } from './pruefung.entity';  // Importiere die Prüfungsentität
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class FaecherService {
  constructor(
    @InjectRepository(Fach) private fachRepo: Repository<Fach>,
    @InjectRepository(Prüfung) private pruefungRepo: Repository<Prüfung> // Injiziere das Prüfungs-Repository
  ) {}

  createFach(fach: Fach): Promise<Fach> {
    return this.fachRepo.save(fach);
  }

  async createPruefung(pruefung: Prüfung): Promise<Prüfung> {
    return this.pruefungRepo.save(pruefung);
  }

  async findPruefungenForFach(id: number): Promise<Prüfung[]> {
    const fach = await this.fachRepo.findOne({ where: { id }, relations: ['prüfungen'] });
    if (!fach) {
      throw new NotFoundException(`Fach with ID ${id} not found`);
    }
    return fach.prüfungen;
  }

  readFaecher(): Promise<Fach[]> {
    return this.fachRepo.find();
  }

  async findFachById(id: number): Promise<Fach> {
    const fach = await this.fachRepo.findOne({ where: { id } });
    if (!fach) {
      throw new NotFoundException(`Fach with ID ${id} not found`);
    }
    return fach;
  }

  updateFach(id: number, newFach: Fach): Promise<UpdateResult> {
    return this.fachRepo.update(id, newFach);
  }

  deleteFach(id: number): Promise<DeleteResult> {
    return this.fachRepo.delete(id);
  }
}
