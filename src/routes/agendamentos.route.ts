import {  Router } from 'express'; 
import {  getCustomRepository } from 'typeorm'; 
import { parseISO } from 'date-fns'; 

import AgendamentoRepository from '../repositories/AgendamentoRepository';
import CreateAgendamentoService from '../services/CreateAgendamentoService'; 
import AgendamentosRepository from '../repositories/AgendamentoRepository';


const agendamentosRouter = Router(); 

agendamentosRouter.get('/' , (request, respose ) => {
  const agendamentosRepository = getCustomRepository(AgendamentosRepository); 
  const agendamentos = agendamentosRepository.find();

  return respose.json(agendamentos); 
} ); 

agendamentosRouter.post('/' , async (request, respose) => {
    try {
      const { provider , date } = request.body;

      const parsedDate = parseISO(date);

      const createAgendamento = new CreateAgendamentoService(); 

      const agendamento = await createAgendamento.execute({
        date: parsedDate,
        provider, 
      });

      return respose.json(agendamento);
    }catch(err) {
      return respose.status(400).json({error: err.message}); 
    }

});

export default agendamentosRouter; 
