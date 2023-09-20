import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config.js';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRoute.js';
import logger from './middlewares/logger.js';
import cors from 'cors'

const api = express();

api.use(logger);
api.use(bodyParser.json());
api.use(cors());

api.get ('/', (req, res) => {
    res.json({menssage: 'Bem-vindo a API'});
});

api.use('/user', logger, userRouter);

api.use('/product', productRouter);

api.all('*', logger, (req, res) => {
    res.status(404).json({massege: 'Rota não encontrada'});
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});