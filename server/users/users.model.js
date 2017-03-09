var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    nome: {
        type: String,
        required:[true,'devi inserire il nome']
          },
    cognome: {
        type :String,
        required:[true,'devi inserire il cognome'],
        unique: [true,"cognome gia esistente"]
},
    sesso: {
        type: String,
        enum:['Male','Female']
    },
    età: {
        type: Number,
        required:true,
        min:[18,"devi essere maggiorenne"],
        max:100
    },
});

userSchema.pre('save', function(next){
    this.nome = this.nome.charAt(0).toUpperCase() +
        this.nome.substring(1).toLowerCase();
        next();
})
 var User =mongoose.model('User',userSchema);

module.exports = User;