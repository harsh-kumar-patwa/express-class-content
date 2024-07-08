const userModel = require('../models/user');

exports.createUser = async(req,res)=>{
    const body = req.body;
    const user = userModel.create({
        username:body.username,
        email:body.email,
        password:body.password
    });
    return res.status(201).json({message:"User Created"});
}
exports.getAllUsers = async(req,res)=>{
    const users = await userModel.find();
    return res.status(200).json(users);
}
exports.getUserById = async(req,res)=>{
    const users = await userModel.findById(req.params.id);
    return res.status(200).json(users);
}
exports.updateUser = async(req,res)=>{
    const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    return res.status(200).json(updatedUser);
}
exports.deleteUser = async(req,res)=>{
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.json({message:"User Deleted"});
}