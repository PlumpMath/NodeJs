var n = 3;
var m = 0;

try{
var c = n/m;
if(c==Infinity)
throw new Error('this error is caused by invalid opertion');
}catch(err){
console.log(err);
}
