module.exports = function(app,express,path){
    //BOOTSTRAP 
app.use('/bootstrap', express.static(path.join(__dirname, "..", "..", "node_modules", "bootstrap", "dist")));

//JQUERY
app.use('/jquery' ,express.static(path.join(__dirname, "..", "..", "node_modules", "jquery", "dist")));

//JS E CSS
app.use('/js', express.static(path.join(__dirname, "..", "..", "client", "js")));
app.use('/css', express.static(path.join(__dirname, "..", "..", "client", "css")));


//SERVIAMO LA INDEX
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
});

//ROUTERS
var users = require('./../users/index.js');
app.use('/users',users);
};