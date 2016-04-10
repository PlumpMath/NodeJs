var EventEmitter = require('events').EventEmitter;
var mee = new EventEmitter;

var con = function(id){console.log('client id: '+id);};
mee.on('connection',con);
mee.on('message', function(msg){console.log('message: '+msg);});
mee.once('once', function(msg){console.log('message once: '+msg);})

mee.emit('connection', 6);
mee.emit('connection', 8);
mee.emit('message', 'this is the first message');
mee.emit('message', 'this is the second message');
mee.emit('once', 'this is the #1 message');
mee.emit('once', 'this is the second message');


mee.removeListener('connection', con);
mee.emit('connection', 11);
mee.emit('message', 'emit after connection is removed');
