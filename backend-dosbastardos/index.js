//-------------- EXPORTACIONES--------------------
    const express = require('express')
    const app = express();
    const morgan = require('morgan');//npm morgan
    const cors = require('cors'); //npm cors
    //--------MODELOS-------------
    const mongoose = require('mongoose');
    const userModel = require('./Models/User.js');
    const postModel = require('./Models/Post.js');
    //------JWT--------
    const jwt = require('jsonwebtoken') //npm jsonwebtoken
    const cookieParser = require('cookie-parser');
    //-----------LEER LOS FILES------------
    const multer = require('multer');
    const upload = multer({ dest: 'Imagenes/' });
    const fs = require('fs');
        //----------Encriptar password-------
        const bcrypt = require('bcryptjs'); //npm bcrypt
        const salt = bcrypt.genSaltSync(10);
        const secret ='sdfsdfsdfsdfsdfsfssfgfhtsfg' // Parametro para el token
    

    //----------MIDDLEWARES---------------
    app.use(morgan('dev'));
    app.use(cors({credentials:true , origin:'http://localhost:3000'}));
    app.use(express.json());
    app.use(cookieParser());
    app.use('/Imagenes', express.static(__dirname+'/Imagenes'))

    //-----------Mongose--------
    mongoose.connect('mongodb+srv://danieltoroprogramacion:Qq7812*@cluster0.9lyfv2a.mongodb.net/?retryWrites=true&w=majority')











//---------------Rutas-----------------
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

            res.cookie('token', token).json({ id: usernameDatabase._id, username })
        })


    }else{

        res.status(400).json('Usuario Incorrecto')
    }
})





app.get('/profile', (req, res)=>{

    const { token }= req.cookies;

    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err;
        res.json(info);
    })
    

})









//------------------------NUEVO POST-----------------------

app.post('/createpost', upload.single('imagen'), async (req, res)=>{

    const { titulo, resumen, contenido } = req.body;

    res.json({body: req.body, fileImage: req.file})
    
    const {originalname , path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext
    

    fs.renameSync(path, newPath)

    
    

    const postCreado = await postModel.create({

                                    titulo, 
                                    resumen, 
                                    contenido,
                                    imagen: newPath,

                                })

    
                                
    
})




//-----------------TRAER LOS POST DE LA DB------------------
app.get('/post', async (req, res)=>{

    const data = await postModel.find();

    res.json(data)
 
    
})






//---------------LOGOUT---------------------------------------

app.post('/logout', (req, res)=>{

    res.clearCookie('token');
    res.cookie('token', '').json('Cierre de Sesion')
    
})






app.listen(3001, () => {
    console.log('listening at 3001');
  })