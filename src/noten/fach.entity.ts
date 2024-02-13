import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Fach {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Prüfung, prüfung => prüfung.fach)
  prüfungen: Prüfung[];
}

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

  @ManyToOne(() => Fach, fach => fach.prüfungen)
  @JoinColumn({ name: 'fachId' })
  fach: Fach;
}
