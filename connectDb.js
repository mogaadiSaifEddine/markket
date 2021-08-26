const mongoose = require('mongoose')

require('dotenv').config({path : './config.env'})
 connectDB = async()=>{
       
             mongoose.connect(process.env.MongoUrl, { useNewUrlParser: true ,useUnifiedTopology: true }).then(
                ()=>{
                    console.log('database connected');
                })
                .catch(
                    (err)=>{
                        console.log(err);
                    })
        
}
module.exports = connectDB