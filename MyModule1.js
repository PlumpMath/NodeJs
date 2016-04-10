var calculate = function(numA, numB){
return numA*numB+10*numB;
}

var add = function(A,B){
return A+B;
}

var perform = function(){
console.log('performing');
}

exports.calculate = calculate;
exports.add = add;
exports.perform=perform;

