var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    nome: String,
    cognome: String,
    sesso: String,
    età: Number,
});

var User = mongoose.model('User',userSchema);

module.exports = User;