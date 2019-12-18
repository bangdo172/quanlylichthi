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
// var del = connection._protocol._delegateError;
// connection._protocol._delegateError = function(err, sequence){
//   if (err.fatal) {
//     console.trace('fatal error: ' + err.message);
//   }
//   return del.call(this, err, sequence);
// };
function get_exam_from_name(name) {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Exam WHERE exam_name='"+name+"'";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				// console.log(result);
				resolve(result);
			});
		});
	});
}

function insert_exam(name) {
	con.connect(function(err) {
		// if (err) throw err;
		var sql = "INSERT INTO Exam (exam_name) VALUES ('"+name+"')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			// console.log(result)
		});
	});
}

function delete_exam(name) {
	con.connect(function(err) {
		var sql = "DELETE FROM Exam WHERE exam_name = '" + name + "'";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted exam ", name);
		});
	});
}

function get_all_exams() {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Exam";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				resolve(result)
			});
		});
	});
}

function delete_all_exams() {
	con.connect(function(err) {
		var sql = "DELETE FROM Exam";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted all exams");
		});
	});
}

//SETTING UP SERVER

 var server = app.listen(process.env.PORT || 8082, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

app.post("/exam/insert", function(req, res) {

	let ex = get_exam_from_name(req.body.Name)
	ex.then((result) => {
		// console.log("RESULT: ", result);
		// console.log(result.length)
		if (result.length == 0) {
			insert_exam(req.body.Name);
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

app.post("/exam/delete", function(req, res) {
	let ex = get_exam_from_name(req.body.Name)
	console.log(ex)
	ex.then((result) => {
		console.log(result);
		if (result.length == 0) {
			console.log("Not exist!");
			res.send({status: "Not exist!"});
		}
		else {
			delete_exam(req.body.Name);
			res.send({status: "Deleted!"})
		}
	}).catch((err) => {
		console.log(err)
	})
})

app.get("/exam/get_all", function(req, res) {
	// console.log('/exam/get_all');
	let exs = get_all_exams();
	exs.then((result) => {
		console.log(result)
		res.send({exams: result})
	})
});

app.get("/exam/delete_all", function(req,res) {
	delete_all_exams();
	console.log("ALL exam BE DELETED!")
	res.send({status: "Empty!"})
	res.end()
})
