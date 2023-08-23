import user from '../../models/userModel.js'

const getUser = async (req, res) => {

    try {
        const [rows, fields] = await user.getUserById(req.body);
        console.log(rows)
        if(rows.length === 0) {
            res.status(404).json({massage: 'Users not found'});
        } else {
            delete rows[0].pass;
            res.json(rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({massage: 'Server error'});
    }
}

export default getUser;