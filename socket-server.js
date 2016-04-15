// 1. create the server socket
// 2. listen for the incoming client on the specific port
// 3. if the client is connected, listen for incoming data and client disconnected events

var serverPort = 9099;
var net = require('net');
var server = net.createServer(function(client){
	console.log('client connected');
	console.log('client IP Address: '+client.remoteAddress);
	console.log('is IPV6: '+net.isIPv6(client.remoteAddress));
	console.log('total server connections: '+server.connections);

	// waiting for the data from the client
	client.on('data', function(data){
		console.log('received data: '+data.toString());
		// write response data to the client socket
		client.write('hello from server');
	});

	// close socket event from the client
	client.on('end', function(){
		console.log('client disconnected');
	});
});

server.on('error', function(err){
	console.log(err);
	server.close();
});

server.listen(serverPort, function(){
	console.log('server started on port '+serverPort);
});
