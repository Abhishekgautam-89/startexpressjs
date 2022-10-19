const express=require('express');

const router = express.Router();

const successPage = require('../controllers/finalsuccess')

router.get('/success', successPage.successGet);

module.exports=router;