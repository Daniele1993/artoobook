var Users = (function(){
    var creaUtente = function(){
        return $.ajax({
            url:"http://localhost:3000/users",
            method:"post",
            data: data
        }).then(function(){
            console.log(risp)
            
             }) .catch(function(err){
                console.log(err);
            });
       
    }
        return{
            creaUtente: creaUtente
        }
})();