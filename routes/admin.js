const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/add-product', (req, res, next)=> {
    // console.log('First middle ware is called');
    res.sendFile(path.join(__dirname,'../', 'views', 'admin.html')); 
});

router.post('/add-product', (req, res, next)=>{    
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;