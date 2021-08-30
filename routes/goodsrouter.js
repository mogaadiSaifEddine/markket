const express = require('express')
const router = express.Router()
const goodCtrl = require('../controllors/goodCtrl')
const isAuth = require('../middelwares/isAuth')


router.post('/' ,isAuth , goodCtrl.addGood )
router.get('/:id' , goodCtrl.getOneGood)
router.get('/',isAuth ,  goodCtrl.getGoods)
router.put('/:id' , goodCtrl.updateGood)
router.delete('/:id' , goodCtrl.deleteGood)


module.exports= router  