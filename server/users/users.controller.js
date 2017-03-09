var mongoose = require('mongoose');
var User = require('./users.model.js');

module.exports = (function(){
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

    
    var createUser = function(req,res){
        var utente = req.body;
        var newUtente = new User(utente);
        newUtente.save()
                .then(function(data){
            res .status(200).send(data);
        })     
                 .catch(function(err){
            res.status(500).send(err);
        });
        
    };

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
    
    return{
        getUsers : getUsers,
        createUser : createUser,
        detailUser : detailUser,
        deleteUser : deleteUser,
        updateUser : updateUser,
    };
})();


