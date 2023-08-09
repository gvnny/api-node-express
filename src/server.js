import express from 'express';
import { PORT } from './config.js';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRoute.js'

const api = express();

api.get ('/', (req, res) => {
    res.json({menssage: 'Bem-vindo a API'});
});

api.use('/user', userRouter);

api.use('/product', productRouter);

api.all('*', (req, res) => {
    res.status(404).json({massege: 'Rota não encontrada'});
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});