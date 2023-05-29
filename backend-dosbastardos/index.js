//-------------- EXPORTACIONES--------------------
const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./Models/User.js')

//----------MIDDLEWARES---------------
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

//-----------Mongose--------
mongoose.connect('mongodb+srv://danieltoroprogramacion:Qq7812*@cluster0.9lyfv2a.mongodb.net/?retryWrites=true&w=majority')




//---------------Rutas-----------------
app.get('/test', (req, res)=>{
    res.send('test ok')
})


app.post('/registro', async (req, res)=>{
    const {username, password} = req.body;
    const userDoc = await userModel.create({ username, password})
    console.log(req.body);
    res.send(userDoc)
})




app.listen(3001, () => {
    console.log('listening at 3001');
  })