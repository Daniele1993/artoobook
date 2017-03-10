var mongoose = require('mongoose');
var User = require('./users.model.js');

module.exports = (function(){
   
        //STAMPA LISTA UTENTI
    var getUsers = function(req,res){
        User.find()
            .exec()
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    };

    //CREA UTENTE
    var createUser = function(req,res){
        var utente = req.body;
        var newUtente = new User(utente);
        newUtente.save()
                .then(function(data){
            res.status(200).json(data);
        })     
                 .catch(function(err){
            res.status(500).send(err);
        })
        
    };
       
     //DETTAGLIO UTENTE
    var detailUser = function(req,res){
        var id = req.params.id;
        User.findById(id)
            .exec()
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    };
    
    //ELIMINA UTENTE
    var deleteUser = function(req,res){
        var id = req.params.id;
        User.findByIdAndRemove(id)
            .exec()
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    };

    //MODIFICA/AGGIORNA UTENTE
    var updateUser = function(req,res){
        var id = req.params.id;
        var newData = req.body;
        User.findByIdAndUpdate(id,newData)
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    };
       
       //RICERCA PER NOME O COGNOME UTENTE
        var cercaUsers = function(req,res){
            var nome = req.query.nome;
            var cognome = req.query.cognome;
            User.find({
                $or:[{ nome :nome
            },{
                cognome : cognome
            }]
        })  .exec()
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
        }
    
    
    //VARIABILI PUBBLICHE CHE CI COLLEGANO ALLE FUNZIONI DI SOPRA
    return{
        getUsers : getUsers,
        createUser : createUser,
        detailUser : detailUser,
        deleteUser : deleteUser,
        updateUser : updateUser,
        cercaUsers : cercaUsers
    }
})();


