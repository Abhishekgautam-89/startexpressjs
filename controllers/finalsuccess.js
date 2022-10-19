const path = require('path');

exports.successGet = (req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'));
};