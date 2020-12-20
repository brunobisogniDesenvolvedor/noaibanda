import { Router } from 'express'; 
import { v4 as uuidv4, v4 } from 'uuid';
import {  startOfHour , parseISO, isEqual } from 'date-fns'; 


const agendamentosRouter = Router(); 

interface Agendamento{

  id : string; 
  provider:  string; 
  date:  Date; 

}

const agendamentos: Agendamento[] = []; 

agendamentosRouter.post('/' , (request, response) => {
  const {  provider , date } = request.body; 

  const parsedDate = startOfHour(parseISO(date));
  const findagendamentoInSameDate = agendamentos.find(agendamento => 
    isEqual(parsedDate, agendamento.date), 

); 

if (findagendamentoInSameDate) {
  return response
  .status(400)
  .json({ message:  ' Esse horário está ocupado, escolha outro !!'})
}

  const agendamento = {
    id:  v4(),
    provider,
    date : parsedDate, 
  }; 

  agendamentos.push(agendamento)

  return response.json(agendamento); 
});

export default agendamentosRouter; 