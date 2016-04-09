var obj1=new String("hello world");
var obj2="hello world";

var str1 = 'hello ';
var str2 = 'world ';
var str3 = 'nodejs';

console.log(str1+str2+str3);

console.log('------parseInt--------');
console.log(parseInt('123'));
console.log(parseInt('123.45'));
console.log(parseInt('-123'));
console.log(parseInt('12abc'));

console.log('------parseFloat-------');
console.log(parseFloat('123.45'));
console.log(parseFloat('-123'));
console.log(parseFloat('12abc'));

var a = 123;
var b=a+'';
console.log('a+ :'+b);

var num = 405;
var str = num.toString();
console.log('toString:'+405);

console.log('-----split string------');
var data = 'Berlin;Amsterdam;London;Jakarta';
console.log('length of data:'+data.length);
var strs = data.split(';');
console.log(strs);
for(var index in strs)
console.log(strs[index]);
