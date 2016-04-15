// DNS is a database system that translates a computer's fully qualified domain name into an IP address
// dns module, resolve4() and resolve6() for IPv4/IPv6 environment
// user lookup() to resolve the domain name

var dns = require('dns');

dns.resolve4('www.pecollege.net', function(err, addresses){
	if(err)
		console.log(err);
	console.log('addresses: '+ JSON.stringify(addresses));
});

dns.lookup('www.pecollege.net', function(err, address, family){
	if(err)
		console.log(err);
	console.log('addresses: '+JSON.stringify(address));
	console.log('family: '+JSON.stringify(family));
})