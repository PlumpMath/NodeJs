const fs = require('fs');
// blocks here until the file is read
const data = fs.readFileSync('index.html');
console.log(data);
// moreWork(); will run after console.log

fs.readFile('index.html',(err, data)=>{
	if(err)
		throw err;
	// moreWork(); will run before console.log
	console.log(data);
});