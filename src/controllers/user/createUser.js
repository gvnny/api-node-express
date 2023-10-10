import user from '../../models/userModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const createUser = async (req, res) => {
    try {
        const userValidated = user.validateCreateUser(req.body)

        if (userValidated.success === false) {
            const zodError = zodErrorParser(userValidated.error)
            return res.status(400).json({
                error: 'Dados invalidos',
                fields: zodError
            })
        }


        if (userIsValid?.success === true) {
            const [result] = await user.create(userValidated.data);
            if (result.affectedRows === 1) {

                const newUser = req.body
                delete newUser.pass
                res.status(201).json({
                    success: 'User created',
                    user: {
                        id: result.insertId,
                        ...newUser
                    }
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    }

}

export default createUser;