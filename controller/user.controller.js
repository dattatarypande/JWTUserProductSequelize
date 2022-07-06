const db = require('../model/index');
const bcrypt=require('bcrypt');
const { validationResult } = require('express-validator');
const userdata = db.userdata;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;


module.exports = {
    createUser: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            const salt = bcrypt.genSaltSync(10);
            const hashP = bcrypt.hashSync(req.body.password, salt);
    
            const user = {
                User_Name: req.body.User_Name,
                User_Password: hashP,
                Email: req.body.email
            }
            userdata.create(user).then((data) => {
                res.send({ error: false, message: "User Registered" });
            }).catch((err) => {
                res.send({ error: true, err: err });
            })
        }
        
    },

    updateUser: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            const id=req.body.id;
            const user = {
                User_Name: req.body.User_Name
            }
            userdata.update(user,{where:{User_Id:id}}).then((data) => {
                res.send({ error: false, message: "User Name Updated" });
            }).catch((err) => {
                res.send({ error: true, err: err });
            })
        }
        
    },
    deleteUser: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            const id=req.body.id;
            const user = {
                isActive: false
            }
            userdata.update(user,{where:{User_Id:id}}).then((data) => {
                res.send({ error: false, message: "User Deleted" });
            }).catch((err) => {
                res.send({ error: true, err: err });
            })
        }
        
    },
}