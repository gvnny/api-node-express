import product from '../../models/productModel.js';

const deleteProduct = async (req, res) => {
    try {
        const [result] = await  product.delete(req.body);
        if (result.affectedRows === 1){
            res.status(200).json({message: `User id: ${req.body.id} deleted`});
        } else {
            res.status(404).json({message: `User id: ${req.body.id} not found`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
    
}

export default deleteProduct