
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
       disegna();
    });

    
     function disegna(){
        
        var str = "";

        Users.getUsers()
         .then(function(Users){
             for(let i= 0;i<Users.length;i++){
                str += "<tr>"+
                       "<td>" + Users[i].nome + "</td>"+
                       "<td>" + Users[i].cognome + "</td>"+
                       "<td>" + Users[i].sesso + "</td>"+
                       "<td>" + Users[i].età + "</td>"+
                       "<td><button idutente='"+ Users[i]._id +"'class='glyphicon glyphicon-trash btn btn-primary' ></button></td>"
                       
                       "</tr>"
             }

             $("#tbody").html(str);
         })
         .catch();
     };

    disegna();

});