const productModel = require('../models/product');

exports.createProduct = async(req,res)=>{
    const body = req.body;
    const product = productModel.create({
        product_name:body.product_name,
        product_price:body.product_price,
        isInStock:body.isInStock,
        category:body.category
    });
    return res.status(201).json({message:"Product Created"});
}

exports.getAllProducts = async(req,res)=>{
    const products = await productModel.find();
    return res.status(200).json(products);
}

exports.getProductById = async(req,res)=>{
    const products = await productModel.findById(req.params.id);
    return res.status(200).json(products);

}

exports.updateProduct = async(req,res)=>{
    const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    return res.status(200).json(updatedProduct);
}

exports.deleteProduct = async(req,res)=>{
    const product = await productModel.findByIdAndDelete(req.params.id);
    return res.json({message:"Product Deleted"});
}