import {  isEqual } from 'date-fns'; 
import Agendamento from '../models/Agendamento'; 

class AgendamentosRepository {

  private agendamentos :  Agendamento[]; 

  constructor( ) {
    this.agendamentos = []; 
  }

  public all() :  Agendamento [] {
    return this.agendamentos; 
  }

  public findByDate(date: Date) : Agendamento | null  {
    const findAgendamento = this.agendamentos.find(agendamento => 
      isEqual(date , agendamento.date), 
      ); 

      return findAgendamento || null;  

  }

  public create(provider : string , date: Date) : Agendamento {
    const agendamento = new Agendamento(provider , date); 

    this.agendamentos.push(agendamento); 

    return agendamento; 

   }
}

export default AgendamentosRepository; 