const Good = require('../models/goodModel')


exports.addGood= (req , res)=>{
    
    const {title , description , price , imageUri } = req.body
    url = req.protocol+'://'+req.get('host')
     good = new Good({
        title , 
        description, 
        price , 
        imageUri


    })
    good.save().then(
        ()=>{
            res.status(201).json({
                msg  : 'a new one was created'})

        })
        .catch(
            (err)=>{
                res.status(400).json({
                    erro : err
                })
            })
}


exports.getGoods = (req , res )=>{
    console.log('okml');
     Good.find().then(
        (goods)=>{
            console.log(goods);
            res.status(200).json(goods)
        }).catch(
            (err)=>{
                res.status(401).json({ error :err })
            })
}



exports.getOneGood = async(req , res )=>{
    try {
        console.log(('object'));
        const {id} = req.params
        console.log(id);
        const good = await Good.findById(id)    
            res.json(good)}
    catch(err){
        res.status(401).json({error : err})
    }        

}
exports.updateGood=async(req , res) =>{
    try{
        const {id}=req.params
        const {title , description , price , imageUri}=req.body
        const good = new Good({
            id , 
            title , 
            description , 
            price ,
            imageUri
        })
        Good.updateOne({_id : id},good )
        res.status(201).json({msg : 'good updated'})

    }
    catch(err){
        res.status(401).json({error : err})
        
    }
}

exports.deleteGood=(req ,res)=>{
    try{
        const {id}=req.params
        Good.deleteOne({_id : id}).then(
            ()=>{
                res.status(200).json({msg:'good deleted'})
            })


    }
    catch(err){
        res.status(401).json({error : err})
    }
}