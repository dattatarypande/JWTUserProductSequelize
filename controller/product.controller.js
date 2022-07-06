const db = require('../model/index');
const { validationResult } = require('express-validator');
const productdata = db.productdata;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = {
    newProduct: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
          
    
            const product = {
                product_Name: req.body.product_Name,
                product_Desc: req.body.product_Desc,
                price: req.body.price,
                created_by:req.user.User_Id
            }
            productdata.create(product).then((data) => {
                res.send({ error: false, message: "Product Created" });
            }).catch((err) => {
                res.send({ error: true, err: err });
            })
        }
        
    },
    getallProducts: (req, res, next) => {
        productdata.findAll({where:{isActive:false}}).then((data) => {
            res.send({ error: false, data:data});
            
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    deleteProduct: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
        const id=req.body.id;
        productdata.update({isActive:false},{where:{Pid:id}}).then((data) => {
            res.send({ error: false, message: "Product deleted" });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    }
    
    },
    updateProduct: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            const product = {
                product_Name: req.body.product_Name,
                product_Desc: req.body.product_Desc,
                price: req.body.price,
                updated_by:req.user.User_Id
            }
        const id=req.body.id;
        productdata.update(product,{where:{Pid:id}}).then((data) => {
            res.send({ error: false, message: "Product updated" });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    }
}
}