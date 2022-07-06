const db = require('../model/index');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userdata = db.userdata;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = {
    userLogin: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            userdata.findAll({where:{Email:req.body.email}}).then((data)=>{
                console.log(data[0].dataValues.User_Password);
                let isSame = bcrypt.compareSync(req.body.password, data[0].dataValues.User_Password);
                    console.log(isSame);
                    
                    if (isSame) {
                      let token=jwt.sign(
                          {User_Id:data[0].dataValues.User_Id,
                            Role: data[0].dataValues.Role},
                            "secret",
                         {algorithm:'HS256',expiresIn:6000*60});
                         res.send({ error: false, message: "login successful",token:token });
                    }
                    else {
                        res.send({ error: true, message: "login failed" })
                    }

            })
           
                    

                   
                
        
        }
    }
}
