const express = require('express');
const { Module } = require('module');

const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log('Second middleware is called');
    res.send('<h1>Hi, from express js</h1>');
});

module.exports=router;