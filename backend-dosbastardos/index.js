//-------------- EXPORTACIONES--------------------
const express = require('express')
const app = express();
const morgan = require('morgan');//npm morgan
const cors = require('cors'); //npm cors
const mongoose = require('mongoose');
const userModel = require('./Models/User.js');
const jwt = require('jsonwebtoken') //npm jsonwebtoken

//----------encriptar password-------
const bcrypt = require('bcryptjs'); //npm bcrypt
const salt = bcrypt.genSaltSync(10);

const secret ='sdfsdfsdfsdfsdfsfssfgfhtsfg' // Parametro para el token

//----------MIDDLEWARES---------------
app.use(morgan('dev'));
app.use(cors({credentials:true , origin:'http://localhost:3000'}));
app.use(express.json())

//-----------Mongose--------
mongoose.connect('mongodb+srv://danieltoroprogramacion:Qq7812*@cluster0.9lyfv2a.mongodb.net/?retryWrites=true&w=majority')




//---------------Rutas-----------------
app.get('/test', (req, res)=>{
    res.send('test ok')
})


//--------------------REGISTRO--------------------------

app.post('/registro', async (req, res)=>{

    const {username, password} = req.body;
    

    try {

        const userDoc = await userModel.create({ username, password:bcrypt.hashSync(password, salt)})
        res.send(userDoc)
        console.log(userDoc);

    } catch (error) {

        console.log(error)
    }
    
})


//-------------LOGIN-------------------

app.post('/login', async (req, res)=>{

    //Informacion de la request
    const {username, password} = req.body;

    //Buscar el usuario en la base de datos
    const usernameDatabase = await userModel.findOne({username});


    //--Comparar la password ingresado con la password que esta hash en la base de datos.
    const passwordCorrect = bcrypt.compareSync(password, usernameDatabase.password)

    if(passwordCorrect){

            //--El metodo sing, tiene cuatro parametros. Importante leer cada uno. 1.Payload 2. secretKey 3. Options 4.Callback
        jwt.sign({username, id:usernameDatabase._id}, secret , {}, (err, token)=>{

            if(err) throw(err);
            res.cookie('token', token).json('InicioSesionCorrecto')
        })


    }else{

        res.status(400).json('Usuario Incorrecto')
    }
})




app.listen(3001, () => {
    console.log('listening at 3001');
  })