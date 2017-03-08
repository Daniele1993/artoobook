module.exports = function(mongoose){
    mongoose.connect('mongodb://daniele:Daniele58@ds011379.mlab.com:11379/daniele', function(err){
    if(err){
        console.log(err);
    }else{
        console.log("conesso al db");
    }
});
};
