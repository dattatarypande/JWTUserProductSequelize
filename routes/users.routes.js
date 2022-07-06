var express = require('express');
var router = express.Router();
const userController=require('../controller/user.controller');
const {newProduct}=require('../controller/product.controller');
// const {UserCheckToken}=require('../middleware/jwt.middleware');
const {body}=require('express-validator')

router.post('/signup',userController.createUser) 

router.post('/create',newProduct) 

router.post('/userupdate',[body('id').notEmpty().isNumeric().withMessage("Please provide id for update user")],userController.updateUser) 
router.post('/userdelete',[body('id').notEmpty().isNumeric().withMessage("Please provide id for delete user")],userController.deleteUser) 

 
module.exports = router;
