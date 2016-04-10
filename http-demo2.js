var https = require('https');
var fs = require('fs');
var options = {
	key: fs.readFileSync('./myserver.key'),
	cert: fs.readFileSync('./myserver.crt'),
	passphrase: 'Abcd4321+'
};

var server = https.createServer(options, function(req,res){
	// console.log(req.headers);
	console.log(req.url);

	res.setHeader('AppId', 123456);

	if(req.url=='/')
		res.write('Welcome to http nodejs');
	else if(req.url=='/customer')
		res.write('Welcome to Customer page');
	else if(req.url == '/admin')
		res.write('Welcome to Admin page');
	else
		res.write('page not found');

	res.end();
});

server.listen(8084);
console.log('Server is running on port 8084');