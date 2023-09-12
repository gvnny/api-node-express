import product from '../../models/productModel.js';

const getProduct = async (req, res) => {
    try {
        const [rows, fields] = await product.getUserById(req.body);
        console.log(rows)
        if(rows.length === 0) {
            res.status(404).json({massage: 'Products not found'});
        } else {
            delete rows[0].pass;
            res.json(rows[0]);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
    
}

export default getProduct