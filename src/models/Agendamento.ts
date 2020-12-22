import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agendementos')
class Agendamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;
  
  @Column('time with time zone')
  date: Date;

}

export default Agendamento; 