import db from '../dataBase/db.js'

const list = async () => {
    return await db.query('SELECT * FROM users');
}

export default {
    list,

}