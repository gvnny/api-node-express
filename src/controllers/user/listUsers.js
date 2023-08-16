import user from '../../models/userModel.js'

const listUsers = async (req, res) => {
    
    try {
        const result = await user.list();
        const [rows, fields] = result;
        if(rows.length === 0) {
            res.status(404).json({massage: 'Users not found'});
        } else {
            res.json(rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({massage: 'Server error'});
    }
}

export default listUsers;