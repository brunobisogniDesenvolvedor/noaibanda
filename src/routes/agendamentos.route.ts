import { Router } from 'express'; 
import { uuid } from 'uuidv4'; 
import {  startofHour , parseISO } from 'date-fns'; 

const agendamentosRouter = Router(); 

const agendamentos = [];

agendamentosRouter.post('/' , (request, response) => {
  const {  provider , date } = request.body; 

  const parsedDate = startofHour(parseISO(date));

  



  const agendamento = {
    id:  uuid(),
    provider,
    date, 
  }; 

  agendamentos.push(agendamento)

  return response.json(agendamento); 
});

export default agendamentosRouter; 