const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// all routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusroute = require('./routes/contactus');
const success=require('./routes/success');

app.use(bodyParser.urlencoded({extended: true}));
// to serve all the css statically
app.use(express.static(path.join(__dirname,'public')));

app.use(shopRoutes);
app.use('/admin',adminRoutes);
app.use(contactusroute);
app.use(success);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);