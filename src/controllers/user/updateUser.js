import user from '../../models/userModel.js'
import zodErrorParser from "../../helpers/zodErrorParser.js"

const updateUser = async (req, res) => {

    try{
        const userValidated = user.validateUpdateUser(req.body)
        if(userValidated.success === false){
            const zodError = zodErrorParser(userValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [result] = await user.update(req.body);
        if (result.affectedRows === 1){
            res.status(200).json({
                message: `User id: ${req.body.id} updated`,
                user: {...req.body}
            });
        } else {
            res.status(404).json({message: `User id: ${req.body.id} not found`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
}

export default updateUser;


