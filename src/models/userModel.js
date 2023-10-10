import db from '../dataBase/db.js';
import { z } from 'zod'

const userSchema = z.object ({
    id: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "ID deve ser um número",
    }),

    name: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "O nome deve ser uma string",
        })
        .min(3, {message: "O nome deve ter no mínimo 3 caracteres"})
        .max(200, {message: "O nome dever ter no máximo 200 caracteres"}),

    email: z.string({
        required_error: "Email é obrigatório",
        invalid_type_error: "Email deve ser uma string",
        })
        .min(5, {message: "O email deve ter ao menos 5 caracteres"})
        .max(500, {message: "Email deve ter no máximo 500 caracteres"})
        .email({message: "Email Inválido"}),

    pass: z.string({
        required_error: "Senha é obrigatória",
        invalid_type_error: "A senha deve ser do tipo string",
        })
        .min(6, {message: "A senha deve ter no mínimo 6 caracteres"})
        .max(500, {message: "A senha dever ter no máximo 500 caracteres"}),

    
    avatar:z.string({
        required_error: "Foto é obrigatória",
        invalid_type_error: "A foto deve ser do tipo string",
        })
        .url({message: "A foto deve ser uma url válida"}),
})

const validateCreateUser = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateUpdateUser = (user) =>{
    const partialUserSchema = userSchema.partial({pass: true})
    return partialUserSchema.safeParse(user)
}

const list = async () => {
    return await db.query('SELECT * FROM users');
}

const create = async (user) => {
    const{name, email, pass, avatar} = user;
    return await db.query('INSERT INTO users (name, email, pass, avatar) VALUES (?, ?, ?, ?)', [name, email, pass, avatar]);
}

const deleteUser = async (user) => {
    const{id} = user;
    return await db.query('DELETE FROM users WHERE id=?', [id]);
}

const update = async (user) => {
    const{id, name, email, pass, avatar} = user;
    return await db.query('UPDATE users SET name=?, email=?, pass=?, avatar=? WHERE id=?', [name, email, pass, avatar, id]);
}

const getUserById = async (user) => {
    const{id} = user;
    return await db.query('SELECT * FROM users WHERE id=?', [id]);
}

export default {
    list,
    create,
    deleteUser,
    update,
    getUserById,
    validateCreateUser,
    validateUpdateUser,
}