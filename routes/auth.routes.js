var express = require('express');
var router = express.Router();
const authController=require('../controller/auth.controller');
const {body}=require('express-validator')
/* GET users listing. */
router.post('/login',
authController.userLogin) 


module.exports = router;
