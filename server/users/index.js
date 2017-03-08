var express = require('express');
var router = express.Router();
var Users = require('./users.controller.js');

//LISTA UTENTI
router.get('/', Users.getUsers);

//CREAZIONE UTENTE
router.post('/',Users.createUser);

//DETTAGLIO UTENTE
router.get('/:id', Users.detailUser);

//ELIMINA UTENTE
router.delete('/:id',Users.deleteUser);

//AGGIORNA UTENTE
router.put('/:id',Users.updateUser);




module.exports = router;