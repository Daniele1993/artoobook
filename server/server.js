var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var bodyparser = require ('body-parser');
const PORT = 3000;

//PARSERS DEL body
app.use(bodyparser.json());

//CONNESSIONE DB
require('./config/database.js')(mongoose);

//ROTTE PRINCIPALI(CSS,BOOTSTRAP,ROUTES,JS)
require('./routes/routes.js')(app,express,path);


//START DEL SERVER
app.listen(3000,function(err){
     console.log('server connesso su http://localhost:'+ PORT)
});
