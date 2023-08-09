import express  from 'express'

const router = express.Router();

router.get ('/', (req, res) => {
    const users = [
        {id: 1, name: "Mala"},
        {id: 2, name: "Lápis"},
        {id: 3, name: "Feijão"},
    ];
    res.json(users);
});

router.post ('/', (req, res) => {
    res.json({menssage: 'Produto criado com sucesso'});
});

router.put ('/', (req, res) => {
    res.json({menssage: 'Produto atualizado com sucesso'});
});

router.delete ('/', (req, res) => {
    res.json({menssage: 'Produto apagado com sucesso'});
});

export default router;