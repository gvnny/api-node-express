import express  from 'express'

const router = express.Router();

router.get ('/', (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "José"},
    ];
    res.json(users);
});

router.post ('/', (req, res) => {
    const dados = req.body;
    console.log(dados.nome);
    res.json({
        menssage: 'Usuário criado com sucesso',
        dados: dados
    });
});

router.put ('/', (req, res) => {
    res.json({menssage: 'Usuário atualizado com sucesso'});
});

router.delete ('/', (req, res) => {
    res.json({menssage: 'Usuário apagado com sucesso'});
});

export default router;