import express from 'express';
import productController from '../controller/productController';

const router = express.Router();

//Routes from Products
router.get('/', productController.indexProduct);

router.post('/product', productController.addProduct);

router.put('/product/:id', productController.updateProduct);

router.delete('/product/:id', productController.deleteProduct);

module.exports = router;   