import { Router } from 'express';
import agendamentosRouter from './agendamentos.route'; 

const routes = Router(); 

routes.use('/agendamentos', agendamentosRouter); 



export default routes; 