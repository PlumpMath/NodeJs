// createSocket() create the UDP socket from the dgram module, udp4 for IPv4, udp6 for IPv6
// bind and listen the port
// get incoming message using the message event

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var message = 'this server message';

server.on('message', function(data, client){
	console.log('received data: '+data);
	console.log('client '+client.address + ":"+client.port);
});

server.on('listening', function(){
	var address = server.address();
	console.log('server listening on '+address.address+":"+address.port);
});

server.bind(9094);