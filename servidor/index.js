import express from 'express';
import cors from 'cors'
import { PUERTO } from './config.js';

import indexRoutes from './routes/index.routes.js'
import taskRoutes from "./routes/tasks.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

//CONFIRMANDO LA CONEXION CON EL PUERTO
app.listen(PUERTO)
console.log(`servidor esta corriendo en el servidor ${PUERTO}`);