const express = require('express');
const router = express.Router();
const userContollers = require('../controllers/userControllers');
//post call
router.post('/',userContollers.createUser);

//get call for all users
router.get('/',userContollers.getAllUsers);

//get call by id
router.get('/:id',userContollers.getUserById);

//update call
router.put('/:id',userContollers.updateUser);

//delete call
router.delete('/:id',userContollers.deleteUser);

module.exports = router;
