var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    nome: {
        type: String,
        
          },
    cognome: {
        type :String,
        
},
    sesso: {
        type: String,
        
    },
    eta: {
        type: Number,
        
    },
});

userSchema.pre('save', function(next){
    this.nome = this.nome.charAt(0).toUpperCase() +
        this.nome.substring(1).toLowerCase();
        next();
})
 var User =mongoose.model('User',userSchema);

module.exports = User;