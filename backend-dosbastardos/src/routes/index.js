const { Router } = require('express');
const bookrouter = require('./booksrouter');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/book', bookrouter);


module.exports = router;
