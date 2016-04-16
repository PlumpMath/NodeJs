// node-mongodb-native driver: https://github.com/christkv/node-mongodb-native

// install MongoDB on Ubuntu
// sudo apt-key adv --keyserver
// keyserver.ubuntu.com --recv 7F0CEB10
// sudo apt-get update

// install MongoDB from http://www.mongodb.org

// install MongoDB and its driver for Node.js:
// sudo apt-get install mongodb-10gen
// sudo npm install mongodb

var mongo = require('mongodb'), Server = mongo.Server, Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var database = new Db('test', server);

database.open(function(err, db){
	if(!err){
		console.log("connected");
		db.collection('employee', function(err, coll){
			var employee = 
				{
					name: 'user1',
					email: 'user1@email.com',
					country: 'germany'
				};
			// insert
			coll.insert(employee, function(err){
				if(err)
					console.log(err);
				else
					console.log('inserted data was success');
				
				//close conection
				db.close();
				console.log('closed');
			});
		});
	}else{
		console.log('connect failed');
	}
});

