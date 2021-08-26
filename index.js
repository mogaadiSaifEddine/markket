const express = require('express')
const mongoose = require('mongoose')
const app = express()
const connectDB = require('./connectDb')
const goodRouter = require('./routes/goodsrouter')
const PORT = 5000 
connectDB()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(express.json())

app.use('/api/goods' , goodRouter  )

  app.listen(PORT, (err)=>{
      err 
      ? console.log(err) 
      :console.log('serveur on '+ PORT);

  })
  

