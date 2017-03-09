var Users = (function(){
    var creaUtente = function(nuovo){
        return $.ajax({
            url:"http://localhost:3000/users",
            method:"post",
            contentType:"application/json",
            dataType:"json",
            data: JSON.stringify(nuovo),
        
             }).then(function(risp){
                 console.log(risp)
            
             }) .catch(function(err){
                console.log(err);
            });
       
    }
        return{
            creaUtente: creaUtente
        }
})();