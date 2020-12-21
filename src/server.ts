import express from 'express';
import routes from './routes/index';
import { createConnection } from "typeorm";



const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log ('Server running on port 3333'); 
})