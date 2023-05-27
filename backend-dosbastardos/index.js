const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors')

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.get('/test', (req, res)=>{
    res.send('test ok')
})

app.post('/registro', (req, res)=>{
    const {username, password} = req.body;
    console.log(req.body);
    res.send('registro ok')
})


app.listen(3001, () => {
    console.log('listening at 3001');
  })