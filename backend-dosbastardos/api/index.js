//-------------- EXPORTACIONES--------------------
    const port = process.env.PORT || 3000;
    const express = require('express')
    const app = express();
    const morgan = require('morgan');//npm morgan
    const cors = require('cors'); //npm cors
    require("dotenv").config();
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
    
        // app.use(cors({credentials:true , origin:'https://dos-bastardos-project.vercel.app'}));
    //----------MIDDLEWARES---------------
    app.use(morgan('dev'));
    app.use(cors({
                    credentials:true, 
                    origin: ['https://dos-bastardos-project.vercel.app']
                    
                }));

    app.use((req, res, next) => {
                    
                    res.setHeader('Access-Control-Allow-Origin', 'https://dos-bastardos-project.vercel.app');
            
                    next();
    });

    app.use(express.json());
    app.use(cookieParser());
    app.use('/Imagenes', express.static(__dirname+'/Imagenes'))



    //-----------Mongose--------
    console.log(process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI)





app.get('/', (req, res)=>{
    res.send('test correct')
})





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

    const { token }= req.cookies;

    const { originalname , path} = req.file;

    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    

    fs.renameSync(path, newPath)


    jwt.verify(token, secret, {}, async (err, info) => {

        if(err) throw err;

        try {

            const postCreado = await postModel.create({

                titulo, 
                resumen, 
                contenido,
                imagen: newPath,
                author: info.id,
    
            })
    
            res.json(postCreado);
            
        } catch (error) {

            console.log(error)
            
        }

        
    })
    
    

    

     
                                
    
})




//-----------------TRAER LOS POST DE LA DB------------------
app.get('/post', async (req, res)=>{

    const data = await postModel.find() //Find sin parametro trae todos
                                .populate('author', ['username']) // populate para que mande la tabla en la propiedad
                                .sort({createdAt: -1});        
                                                            

    res.json(data)
 
    
})






//---------------LOGOUT---------------------------------------

app.post('/logout', (req, res)=>{

    res.clearCookie('token');
    res.cookie('token', '').json('Cierre de Sesion')
    
})


app.get('/post/:id',  async (req, res)=>{

    const {id}=req.params

    const postFind = await postModel.findById(id).populate('author', ['username'])

    res.json(postFind)
})






app.listen(port, "0.0.0.0", () => {
    console.log('listening at 3001');
  })