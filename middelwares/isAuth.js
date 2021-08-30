const jwt =require('jsonwebtoken')
const User = require('../models/userModel')


const auth=async(req , res , next )=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token , 'RANDOM_TOKEN_SECRET')
        const userId = decodedToken.userid
        console.log(userId);
        user = await User.findById(userId)
        console.log(user);
        if (!user){
            throw ('invalid User')
        }
        req.user=user
       next()

    }
    catch(err){
        res.status(401).json({
            err: err
        })
    }
}
module.exports=auth