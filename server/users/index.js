var express = require('express');
var router = express.Router();
var Users = require('./users.controller.js');

//LISTA UTENTI
router.get('/', Users.getUsers);

//CREAZIONE UTENTE
router.post('/',Users.createUser);

//DETTAGLIO UTENTE
router.get('/id/:id', Users.detailUser);

//ELIMINA UTENTE
router.delete('/id/:id',Users.deleteUser);

//AGGIORNA UTENTE
router.put('/id/:id',Users.updateUser);

//RICERCA PER NOME E COGNOME
router.get('/cerca/',Users.cercaUsers);




module.exports = router;