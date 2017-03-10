var Users = (function(){
    var createUser = function(nuovo){
   
   //SERVE PER PASSARE I DATI DALLA FORM AL DB
        return $.ajax({
            url:"http://localhost:3000/users",
            method:"POST",
            contentType:"application/json", //DESCRIVE IL CONTENUTO DEL FILE
            dataType:"json", //DESCRIVE IL TIPO DEL FILE
            data: JSON.stringify(nuovo), // SERVE PER TRASFORMARE IL JSON IN STRINGA        
             }).then(function(risp){
                 console.log(risp)   
             }) .catch(function(err){
                console.log(err);
            })
    }
        var getUsers = function(){
            return $.ajax({
                url:"http://localhost:3000/users",
                method:"GET",
                contentType:"application/json", // DESCRIVE IL CONTENUTO DEL FILE
                 dataType:"json", //DESCRIVE IL TIPO DEL FILE
            });
        }
       
        var deleteUser = function(id){
            return $.ajax({
                url:"http://localhost:3000/users/id/"+id,
                method:"DELETE",
                contentType:"application/json", // DESCRIVE IL CONTENUTO DEL FILE
                 dataType:"json", //DESCRIVE IL TIPO DEL FILE
            });
        }
        
        var detailUser = function(id){
            return $.ajax({
                url:"http://localhost:3000/users/id/"+id,
                method:"GET",
                contentType:"application/json", // DESCRIVE IL CONTENUTO DEL FILE
                 dataType:"json", //DESCRIVE IL TIPO DEL FILE
            });
        }

        var updateUser = function(id,data){
            return $.ajax({
                url:"http://localhost:3000/users/id/"+id,
                method:"PUT",
                contentType:"application/json", // DESCRIVE IL CONTENUTO DEL FILE
                 dataType:"json",   //DESCRIVE IL TIPO DEL FILE
                 data:JSON.stringify(data) 
            });
        }
        
    
        var cercaUsers = function(nome){
            
            return $.ajax({
                url:"http://localhost:3000/users/cerca/?nome=" + nome,
                method:"GET",
                contentType:"application/json", // DESCRIVE IL CONTENUTO DEL FILE
                 dataType:"json", //DESCRIVE IL TIPO DEL FILE

            });
        }

        return{ // QUESTO RETURN VA SEMPRE ALLA FINE 
        getUsers : getUsers,
        createUser : createUser,
        detailUser : detailUser,
        deleteUser : deleteUser,
        updateUser : updateUser,
        cercaUsers : cercaUsers,
    
        }
})();