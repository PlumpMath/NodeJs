var Account = module.exports=function()
{
console.log('constructor');
}

Account.prototype.perform = function()
{
console.log('perform');
}

Account.prototype.foo = function(a,b){
console.log('foo -'+a+'-'+b);
}
