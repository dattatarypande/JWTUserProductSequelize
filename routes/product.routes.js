var express = require('express');
var router = express.Router();
const userController=require('../controller/user.controller');
const productController=require('../controller/product.controller');
const {body}=require('express-validator')

router.post('/getallproduct',productController.getallProducts)
router.post('/update',[body('id').notEmpty().isNumeric().withMessage("Please provide product id for update")],productController.updateProduct) 
router.post('/delete',[body('id').notEmpty().isNumeric().withMessage("Please provide product id for delete")],productController.deleteProduct) 


module.exports = router;
