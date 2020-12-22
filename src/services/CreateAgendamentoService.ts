import { startOfHour } from 'date-fns'; 
import { getCustomRepository } from 'typeorm'; 

import Agendamento from '../models/Agendamento'; 
import AgendamentosRepository from '../repositories/AgendamentoRepository'; 

interface Request {
  provider : string; 
  date : Date; 
}

class CreateAgendamentoService {
        public async execute ({ date, provider} : Request) :Promise< Agendamento> {
          const agendamentosRepository = getCustomRepository(AgendamentosRepository);
          
          const agendamentoDate = startOfHour(date);

          const findAgendamentoInSameDate = await agendamentosRepository.findByDate(
            agendamentoDate, 
          ); 

          if (findAgendamentoInSameDate) {
            throw Error ('Esse horário já foi reservado.')
          }

          const agendamento = agendamentosRepository.create({
            provider, 
            date: agendamentoDate,
          });

          await agendamentosRepository.save(agendamento); 

            return agendamento; 

        };

    }

export default CreateAgendamentoService; 