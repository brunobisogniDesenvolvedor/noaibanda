import { Router} from 'express'; 
import { uuid } from 'uuidv4'; 



const agendamentosRouter = Router(); 

const agendamentos = []; 

agendamentosRouter.post('/' , (req, res)  => {
  const {  provider , date } = req.body; 

  const agendamento = { 
    id:  uuid(),
    provider,
    date, 
  };

  agendamentos.push(agendamento);
return res.json(agendamento);
});



export default agendamentosRouter; 

