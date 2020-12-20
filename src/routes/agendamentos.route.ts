import { Router } from 'express'; 
import {  startOfHour , parseISO } from 'date-fns'; 

import AgendamentosRepository from '../repositories/AgendamentoRepository'; 

const agendamentosRouter = Router(); 
const agendamentosRepository = new AgendamentosRepository(); 

agendamentosRouter.get('/' , (request , response) => {
  const agendamentos = agendamentosRepository.all(); 

  return response.json(agendamentos);  
})

agendamentosRouter.post('/' , (request , response) => {
  const { provider , date } = request.body;

  const parsedDate =  startOfHour(parseISO(date)); 

  const findAgendamentoInSameDate = agendamentosRepository.findByDate(
    parsedDate); 



    if ( findAgendamentoInSameDate) {
      return response
        .status(400)
        .json({ messagem :  'Esse horário já foi reservado'}); 
    }

    const agendamento = agendamentosRepository.create(provider , parsedDate); 

  

    return response.json(agendamento); 
    });

    export default agendamentosRouter; 