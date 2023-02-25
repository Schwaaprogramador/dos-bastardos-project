const { Router } = require('express');

const bookrouter = Router();


bookrouter.get('/', async (request, response)=>{    

    try {
        
        response.status(200).send('Hola BOOK');

    } catch (error) {

        console.log(error)
    }
    
    
})

module.exports = bookrouter;

