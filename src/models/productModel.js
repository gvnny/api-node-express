import db from '../dataBase/db.js';

const create = async (product) => {
    console.log(product);
    const {name, amount, price} = product;
    return await db.query('INSERT INTO product (name, amount, price) VALUES (?, ?, ?)', [name, amount, price]);
}

const deleteProduct = async (product) => {

}

export default {
    create,
}
