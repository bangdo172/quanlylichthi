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


function get_subject_from_id(id) {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Subject WHERE subject_id='"+id+"'";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				// console.log(result);
				resolve(result);
			});
		});
	});
}

function insert_subject(id, name) {
	con.connect(function(err) {
		// if (err) throw err;
		var sql = "INSERT INTO Subject (subject_id, subject_name) VALUES ('"+id+"', '"+name+"')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			// console.log(result)
		});
	});
}

function delete_subject(id) {
	con.connect(function(err) {
		var sql = "DELETE FROM Subject WHERE subject_id = '" + id + "'";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted subject ", get_subject_from_id(id).Name);
		});
	});
}

function get_all_subjects() {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Subject";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				resolve(result)
			});
		});
	});
}

function delete_all_subjects() {
	con.connect(function(err) {
		var sql = "DELETE FROM Subject";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted all subjects");
		});
	});
}

//SETTING UP SERVER

 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

app.post("/subject/insert", function(req, res) {

	let sub = get_subject_from_id(req.body.Id)
	sub.then((result) => {
		// console.log("RESULT: ", result);
		// console.log(result.length)
		if (result.length == 0) {
			insert_subject(req.body.Id, req.body.Name);
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

app.post("/subject/delete", function(req, res) {
	let sub = get_subject_from_id(req.body.Id)
	sub.then((result) => {
		console.log(result);
		if (result.length == 0) {
			console.log("Not exist!");
			res.send({status: "Not exist!"});
		}
		else {
			delete_subject(req.body.Id);
			res.send({status: "Deleted!"})
		}
	}).catch((err) => {
		console.log(err)
	})
})

app.get("/subject/get_all", function(req, res) {
	let subs = get_all_subjects();
	subs.then((result) => {
		console.log(result)
		res.send({subjects: result})
	})
});

app.get("/subject/delete_all", function(req,res) {
	delete_all_subjects();
	console.log("ALL SUBJECT BE DELETED!")
	res.send({status: "Empty!"})
	res.end()
})







