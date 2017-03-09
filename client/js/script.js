$(document).ready(function(){
     
     $("#miaform").submit(function(event){
       event.preventDefault();
       var nome = this.nome.value;
       var cognome = this.cognome.value;
       var età = this.età.value;
       var sesso = this.sesso.value;
       console.log(nome);
       console.log(cognome);
       console.log(età);
       console.log(sesso);
     });

});