import express from 'express';
import pessoaRoutes from './routes/pessoaRoutes';
import contatoRoutes from './routes/contatoRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import authRoutes from "./routes/authRoutes";
import { swaggerUi, swaggerSpec } from "./docs/swagger";



const app = express();


app.use(express.json());

//app.use('/pessoas', pessoaRoutes);
//app.use('/contatos', contatoRoutes);
app.use(userRoutes);
app.use("/api", authRoutes);
app.use('/api', userRoutes);

app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
