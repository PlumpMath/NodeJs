var express = require('express'), http = require('http');

var app = new express();
// use express object when create server
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection', function(socket){
	socket.emit('news', {content: 'news from server'});
	socket.on('feedback', function(data){
		console.log(data);
		socket.emit('news', {content:'news - '+new Date()});
	});
});

server.listen(8098);
console.log('server started on port: '+8098);