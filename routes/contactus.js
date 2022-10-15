const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/contact-us', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'))
})
router.post('/contact-us', (req, res, next)=>{
    res.redirect('/success');
})

module.exports=router;