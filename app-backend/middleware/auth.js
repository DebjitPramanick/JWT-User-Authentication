const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    try{
        const token = req.header('x-auth-token');
        const verifiedUser = jwt.verify(
            token,
            config.get('jwtsecret')
        )

        req.user = verifiedUser.user;
        next();

    }catch(err){
        console.log(err.message);
        return res.status(500).json({msg: "server error..."});
    }
}