const express = require('express');
// const { Module } = require('module');
const path = require('path');


const router = express.Router();

router.get('/',(req, res, next)=>{
    // console.log('Second middleware is called');
    res.sendFile(path.join(__dirname,'../','views', 'shop.html'));
});

module.exports=router;