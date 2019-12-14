var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express(); 
// Body Parser Middleware
app.use(bodyParser.json()); 

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "lichthi"
});


function get_room_from_id(id) {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Room WHERE room_id='"+id+"'";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				// console.log(result);
				resolve(result);
			});
		});
	});
}

function insert_room(id, name, computer) {
	con.connect(function(err) {
		// if (err) throw err;
		var sql = "INSERT INTO Room (room_id, room_name) VALUES ('"+id+"', '"+name+"', '"+computer+"')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			// console.log(result)
		});
	});
}

function delete_room(id) {
	con.connect(function(err) {
		var sql = "DELETE FROM Room WHERE room_id = '" + id + "'";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted room ", get_room_from_id(id).Name);
		});
	});
}

function get_all_rooms() {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Room";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				resolve(result)
			});
		});
	});
}

function delete_all_rooms() {
	con.connect(function(err) {
		var sql = "DELETE FROM Room";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted all rooms");
		});
	});
}

//SETTING UP SERVER

 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

app.post("/room/insert", function(req, res) {

	let ro = get_room_from_id(req.body.Id)
	ro.then((result) => {
		// console.log("RESULT: ", result);
		// console.log(result.length)
		if (result.length == 0) {
			insert_room(req.body.Id, req.body.Name, req.body.Computer);
			res.send({status: "Inserted!"});
		}
		else {
			console.log("Existed!");
			res.send({status: "Existed!"});
		}
	}).catch((err) => {
		console.log(err)
	})
	res.end()
});

app.post("/room/delete", function(req, res) {
	let ro = get_room_from_id(req.body.Id)
	ro.then((result) => {
		console.log(result);
		if (result.length == 0) {
			console.log("Not exist!");
			res.send({status: "Not exist!"});
		}
		else {
			delete_room(req.body.Id);
			res.send({status: "Deleted!"})
		}
	}).catch((err) => {
		console.log(err)
	})
})

app.get("/room/get_all", function(req, res) {
	let ros = get_all_rooms();
	ros.then((result) => {
		console.log(result)
		res.send({rooms: result})
	})
});

app.get("/room/delete_all", function(req,res) {
	delete_all_rooms();
	console.log("ALL room BE DELETED!")
	res.send({status: "Empty!"})
	res.end()
})

