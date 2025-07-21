import express from 'express';
import pessoaRoutes from './routes/pessoaRoutes';
import contatoRoutes from './routes/contatoRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use('/pessoas', pessoaRoutes);
app.use('/contatos', contatoRoutes);
app.use(userRoutes);

app.use(cors());

export default app;
