const express = require('express')
const router = express.Router()
const goodCtrl = require('../controllors/goodCtrl')


router.post('/' ,goodCtrl.addGood )
router.get('/:id' , goodCtrl.getOneGood)
router.get('/', goodCtrl.getGoods)
router.put('/:id' , goodCtrl.updateGood)
router.delete('/:id' , goodCtrl.deleteGood)


module.exports= router