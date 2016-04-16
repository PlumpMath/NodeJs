// install sqlite3 driver, npm install sqlite3
// creating, inserting, deleting

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydatabase');

db.serialize(function(){
	// create the database
	db.run('CREATE TABLE customer(id NUMBER, name TEXT)');

	// insert the data
	var query = db.prepare('INSERT INTO customer VALUES(?,?)');
	for(var i=0;i<5;i++){
		query.run(i+1, 'customer'+(i+1));
	}
	query.finalize();

	// select the data
	db.each('SELECT * FROM customer', function(err, row){
		if(!err){
			console.log(row.id + '----'+row.name);
		}else{
			console.log(err);
		}
	});
});

db.close();