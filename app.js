const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product', (req, res, next)=> {
    // console.log('First middle ware is called');
    res.send("<form action = '/product' method='POST'><input type='text' name='title'></br></br> <input type = 'text' name = 'Size'></br></br><button type='submit'>Add</button></form>")    
});

app.use('/product', (req, res, next)=>{    
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next)=>{
    // console.log('Second middleware is called');
    res.send('<h1>Hi, from express js</h1>');
});   

app.listen(3000);