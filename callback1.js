function perform(a,b,callback){
var c = a*b+a;
callback(c);
}

perform(10,5,function(result){
console.log(result);})

