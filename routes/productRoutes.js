const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

//post call
router.post('/',productControllers.createProduct);

//get call for all products
router.get('/',productControllers.getAllProducts);

//get call by id
router.get('/:id',productControllers.getProductById);

//update call
router.put('/:id',productControllers.updateProduct);

//delete call
router.delete('/:id',productControllers.deleteProduct);

module.exports = router;
