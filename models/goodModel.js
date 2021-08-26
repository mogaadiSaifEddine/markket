const mongoose = require ('mongoose')
const goodSchema = new mongoose.Schema({
    title : {type : String , required : true} , 
    price : {type: Number , required : true} , 
    description : {type : String , required : true},
    imageUri :  {type: String , required : true}
})
module.exports=  mongoose.model("goods" , goodSchema)