
const jwt = require('jsonwebtoken');

module.exports = {
    AdminCheckToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            jwt.verify(token, "secret", (err, decoded) => {
                if (err) {
                    res.send("UnAuthorized user token");
                } else {
                    req.user = decoded;
                    if(req.user.Role==="Admin"){
                        next();
                    }else{
                        res.send({error:true,msg:"Access Forbidden"});
                    }
                   
                }
            });
        } else {
            res.send({
                error: true,
                Message: "Token not provided"
            });
        }
    },
    UserCheckToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            jwt.verify(token, "secret", (err, decoded) => {
                if (err) {
                    res.send("UnAuthorized user token");
                } else {
                    req.user = decoded;
                    next();
                }
            });
        } else {
            res.send({
                error: true,
                Message: "Token not provided"
            });
        }
    }
}


