// create a udp socket by createSocket(), udp4 for IPv4, and udp6 for IPv6
// send a message to the UDP server by send()

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var server = 'localhost';
var serverPort = 9094;

// send message
var message = new Buffer('this is client message');
client.send(message, 0, message.length, serverPort, server, function(err, bytes){
	if(err)
		console.log(err);
	else
	{
		console.log(bytes+" bytes are sent");
		client.close();
	}
})