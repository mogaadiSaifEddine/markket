const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signUp=async(req , res)=>{
   try{
        const {email , password} = req.body
        console.log(email , password);
        bcrypt.hash(password , 10).then(
            (pwd)=>{
                user = new User({
                    email : email , 
                    password : pwd
                })
                user.save().then(
                    ()=>{
                        res.status(201).json({msg : 'an account was created'})
                    }).catch(
                        (err)=>{
                            res.status(500).json({err : err})
                        })
            })
       
    }
   

    catch(err){
        res.status(401).json({error : err})

    }


}




exports.signIn=async(req , res)=>{
    User.findOne({email : req.body.email}).then(
        (user)=>{
            
            if (!user){
                return res.status(401).json({msg :'u dont have an account'})
            }
     
        bcrypt.compare(req.body.password , user.password).then(
            (ok)=>{
                if (!ok){
                    return res.status.json({msg  :'wrong password'})
                }
                const token = jwt.sign(
                    {userid : user._id} , 
                    'RANDOM_TOKEN_SECRET' ,  
                    {expiresIn : '12h'}
                )
                res.status(201).json({userid : user._id , 
                                        token: token})
            }).catch(
                (err)=>{
                    res.status(401).json({error : err})
                })
                    
        })
}
