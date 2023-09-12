import product from '../../models/productModel.js';

const listProduct = async (req, res) => {
    try{
        const result = await product.list();
        const [rows, fields] = result;
        if(rows.length === 0) {
            res.status(404).json({massage: 'Product not found'});
        } else {
            res.json(rows);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
}

export default listProduct;