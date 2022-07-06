var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/auth.routes');
var usersRouter = require('./routes/users.routes');
var productRouter=require('./routes/product.routes');
const {AdminCheckToken,UserCheckToken}=require('./middleware/jwt.middleware');

const db=require('./model')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.sequelize.sync();
// db.sequelize.sync({force:true});
app.get('/', (req,res)=>{
    res.send("Welcome to user poduct")
});
app.use('/auth', authRouter);
app.use('/users',AdminCheckToken, usersRouter);
app.use('/product',AdminCheckToken,productRouter);
app.use('/newpro',UserCheckToken,usersRouter);
module.exports = app;
