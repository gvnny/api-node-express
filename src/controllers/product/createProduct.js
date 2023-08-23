import product from '../../models/productModel.js';

const createProduct = async (req, res) => {
    try {
        const [result] = await  product.create(req.body);
        if(result.affectedRows === 1) {
            res.status(201).json({
                message: 'Product created',
                product: {
                ...req.body
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
}

export default createProduct;