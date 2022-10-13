const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log('First middle ware is called');
    next();
});
app.use((req, res, next)=>{
    console.log('Second middleware is called');
    res.send('<h1>Hi, from express js</h1>');
});   

app.listen(3000);