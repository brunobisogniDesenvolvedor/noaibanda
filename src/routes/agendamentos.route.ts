import { Router } from 'express'; 
import {  uuid } from 'uuidv4' ; 
import {  startOfHour , parseISO, isEqual } from 'date-fns'; 
import Agendamento from '../models/Agendamento'; 

const agendamentosRouter = Router(); 

const agendamentos:  Agendamento[] = []; 

agendamentosRouter.post('/' , (request , response) => {
  const { provider , date } = request.body;

  const parsedDate =  startOfHour(parseISO(date)); 

  const findAgendamentoInSameDate = agendamentos.find(agendamento => 
    isEqual(parsedDate , agendamento.date), 
    );

    if ( findAgendamentoInSameDate) {
      return response
        .status(400)
        .json({ messagem :  'Esse horário já foi reservado'}); 
    }

    const agendamento = new Agendamento(provider, parsedDate);

    agendamentos.push(agendamento); 

    return response.json(agendamento); 
    });

    export default agendamentosRouter; 