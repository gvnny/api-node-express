import db from '../dataBase/db.js';

const list = async () => {
    return await db.query('SELECT * FROM users');
}

const create = async (user) => {
    const{name, email, pass} = user;
    return await db.query('INSERT INTO users (name, email, pass) VALUES (?, ?, ?)', [name, email, pass]);
}

const deleteUser = async (user) => {
    const{id} = user;
    return await db.query('DELETE FROM users WHERE id=?', [id]);
}

const update = async (user) => {
    const{id, name, email, pass} = user;
    return await db.query('UPDATE users SET name=?, email=?, pass=? WHERE id=?', [name, email, pass, id]);
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
    getUserById
}