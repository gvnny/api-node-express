import db from '../dataBase/db.js';

const create = async (product) => {
    console.log(product);
    const {name, amount, price} = product;
    return await db.query('INSERT INTO product (name, amount, price) VALUES (?, ?, ?)', [name, amount, price]);
}

const deleteProduct = async (product) => {
    const{id} = product;
    return await db.query('DELETE FROM product WHERE id=?', [id]);
}

const update = async (product) => {
    const{id, name, amount, price} = product;
    return await db.query('UPDATE product SET name=?, amount=?, price=? WHERE id=?', [name, amount, price, id]);
}

const getProductById = async (product) => {
    const{id} = product;
    return await db.query('SELECT * FROM product WHERE id=?', [id]);
}

const list = async () => {
    return await db.query('SELECT * FROM product');
}

export default {
    create,
    deleteProduct,
    update,
    getProductById,
    list
}
