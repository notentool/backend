// pruefung.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Fach } from './fach.entity'; // Importiere die Fach-Entität

@Entity()
export class Prüfung {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  note: number;

  @Column({ nullable: true })
  datum: Date;

  @ManyToOne(() => Fach, fach => fach.prüfungen, { onDelete: 'CASCADE' })
  fach: Fach;
}
