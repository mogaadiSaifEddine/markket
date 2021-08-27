const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const authCtrl = require('../controllors/authCtrl')

router.post('/signup' ,authCtrl.signUp)
router.post('/signin' ,authCtrl.signIn)
module.exports = router