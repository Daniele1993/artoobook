$(document).ready(function(){
    $("#miaform").submit(function(event){
       event.preventDefault();
       var nome = this.nome.value;
       var cognome = this.cognome.value;
       var eta = this.eta.value;
       var sesso = this.sesso.value;
       var nuovo = {
           nome:nome,
           cognome:cognome,
           sesso:sesso,
           eta: eta
       }


       Users.createUser(nuovo);
       this.reset(); // pulisci la form dopo aver premuto il tasto 
       disegna();
    });

    function disegna(){
        var str = "";
        Users.getUsers()
         .then(function(Users){
             for(let i= 0;i < Users.length; i++){
                str += "<tr>"+
                       "<td>" + Users[i].nome + "</td>"+
                       "<td>" + Users[i].cognome + "</td>"+
                       "<td>" + Users[i].sesso + "</td>"+
                       "<td>" + Users[i].eta + "</td>"+
                       "<td><button idutente='"+ Users[i]._id +"'class='elimina glyphicon glyphicon-trash btn btn-primary'></button></td>"+
                       "<td><button idutente='"+ Users[i]._id +"'class='modifica glyphicon glyphicon-pencil btn btn-primary'></button></td>"+
                       "</tr>"
             }
            $("#tbody").html(str);
            $('.elimina').click(function(){
                 var id= $(this).attr("idutente");
                 elimina(id);
             });
             $(".modifica").click(function() {
                var id= $(this).attr("idutente");
                modifica(id);
             
             $("#miaform").addClass("hidden");
             $("#aggiornaform").addClass("hidden");
         
            });    
                 }) .catch();
     }

    //ELIMINA UTENTE
    function elimina(id){
        Users.deleteUser(id)
            .then(function(data){
                res.status(200).json(data);
          }).catch(function(err){
              res.status(500).send(err);
            console.log(err);
        });
        disegna();
    };
    
        $("#nuovo").click(function(){
        $("#miaform").removeClass("hidden");
        $("#aggiornaform").addClass("hidden");
    
      
    });


        

    //MODIFICA UTENTE
    function modifica(id){ 
        Users.detailUser(id)
            .then(function(user){
            console.log(user);
            $("#aggiornaform [name=nome]").val(user.nome);
            $("#aggiornaform [name=cognome]").val(user.cognome);
            $("#aggiornaform [name=sesso]").val(user.sesso);
            $("#aggiornaform [name=eta]").val(user.eta);
              $("#aggiornaform").removeClass("hidden");
                    $("#miaform").addClass("hidden");
       
        
            $("#aggiornaform").submit(function(event){
                event.preventDefault();//COSI NON PARTE SUBITO LA CHIAMATA
                //BISOGNA RECUPERARE TUTTI I DATI INSERITI NELLA FORM
                var nome = this.nome.value;
                var cognome = this.cognome.value;
                var sesso = this.sesso.value;
                var eta = this.eta.value;
                var aggiorna = {
                    nome: nome,
                    cognome: cognome,
                    sesso: sesso,
                    eta: eta
                }

                Users.updateUser(id,aggiorna)
                     .then(function(data){

            
                }).catch(function(err){
                    console.log(err);
                });
             
                
                location.reload();// SERVE PER RICARICARE LA PAGINA
         });
    });
}

                disegna();

                $("#cercanome").click(function(){    //SERVE PER FARE UNA RICERCA PER NOME 
                    var nome = $("#inputricerca").val();
                    Users.cercaUsers(nome)
                        .then(function (data){
                        console.log(data);
                        $("#risultato").html("ho trovato" +data.length+ "persone di nome" +nome)
            })           .catch(function (err){
                        console.log(err);
        });
    });

});