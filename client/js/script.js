
$(document).ready(function(){
     
     $("#miaform").submit(function(event){
       event.preventDefault();
       var nome = this.nome.value;
       var cognome = this.cognome.value;
       var età = this.età.value;
       var sesso = this.sesso.value;
       var nuovo = {
           nome:nome,
           cognome:cognome,
           sesso:sesso,
           età: età
       }
       Users.creaUtente(nuovo);
       this.reset(); // pulisci la form dopo aver premuto il tasto 

    });

});