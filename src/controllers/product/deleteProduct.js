import product from '../../models/productModel.js';

const deleteProduct = async (req, res) => {
    try {
        const [result] = await  product.delete(req.body);
        if (result.affectedRows === 1){
            res.status(200).json({success: `User id: ${req.body.id} deleted`});
        } else {
            res.status(404).json({error: `User id: ${req.body.id} not found`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Server error'});
    }
    
}

export default deleteProduct