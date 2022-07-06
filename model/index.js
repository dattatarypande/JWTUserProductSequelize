const Sequelize=require('sequelize');

const sequelize=new Sequelize('userproduct','root','',{
host :'localhost',
dialect:'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log('Connection Has Been Established');
})
.catch(()=>{
    console.log('Unable To Connect To The Database ',err);
});

db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.userdata=require('../model/userdata.model')(Sequelize,sequelize);
db.productdata=require('../model/productdata.model')(Sequelize,sequelize);


module.exports=db;