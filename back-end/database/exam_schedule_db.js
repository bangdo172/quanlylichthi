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

// function startConnection() {
//     console.error('CONNECTING');
//     connection = mysql.createConnection({}
// 		host: "localhost",
// 		user: "esot",
// 		password: "password",
// 		database: "lichthi"
//     	);
//     connection.connect(function(err) {
//         if (err) {
//             console.error('CONNECT FAILED', err.code);
//             startConnection();
//         }
//         else
//             console.error('CONNECTED');
//     });
//     connection.on('error', function(err) {
//         if (err.fatal)
//             startConnection();
//     });
// }

// startConnection();
// var sql = "SELECT "

function get_ES_from_id(subject_id, exam_id) {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Exam_schedule WHERE subject_id='"+subject_id+"' AND exam_id = '"+exam_id+"'";
			console.log(sql);
			con.query(sql, function (err, result) {
				if (err) reject(err);
				// console.log(result);
				resolve(result);
			});
		});
	});
}

function insert_ES(subject_id, exam_id, start_time, end_time) {
	con.connect(function(err) {
		// if (err) throw err;
		var sql = "INSERT INTO Exam_schedule (subject_id, exam_id, start_time, end_time) VALUES ('"+subject_id+"', '"+exam_id+"', '"+start_time+", "+end_time+"')";
		console.log(sql);
		con.query(sql, function (err, result) {
			if (err) throw err;
			// console.log(result)
		});
	});
}

function delete_ES(subject_id, exam_id) {
	con.connect(function(err) {
		var sql = "DELETE FROM Exam_schedule WHERE subject_id = '" + subject_id + "' AND exam_id = '" + exam_id + "'";
		console.log(sql)
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted 1 ES subject_id: " + subject_id + " and exam_id: " + exam_id);
		});
	});
}

function get_all_ESs() {
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
			var sql = "SELECT * FROM Exam_schedule";
			con.query(sql, function (err, result) {
				if (err) reject(err);
				resolve(result)
			});
		});
	});
}

function delete_all_ESs() {
	con.connect(function(err) {
		var sql = "DELETE FROM Exam_schedule";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Deleted all ESs");
		});
	});
}

//SETTING UP SERVER

 var server = app.listen(process.env.PORT || 8082, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

app.post("/ES/insert", function(req, res) {

	let es = get_ES_from_id(req.body.subject_id, req.body.exam_id)
	es.then((result) => {
		// console.log("RESULT: ", result);
		// console.log(result.length)
		if (result.length == 0) {
			insert_ES(req.body.subject_id, req.body.exam_id, req.body.start_time, req.body.end_time);
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

app.post("/ES/delete", function(req, res) {
	let es = get_ES_from_id(req.body.subject_id, req.body.exam_id)
	es.then((result) => {
		console.log(req.body)
		console.log(result);
		if (result.length == 0) {
			console.log("Not exist!");
			res.send({status: "Not exist!"});
		}
		else {
			delete_ES(req.body.subject_id, req.body.exam_id);
			res.send({status: "Deleted!"})
		}
	}).catch((err) => {
		console.log(err)
	})
})

app.get("/ES/get_all", function(req, res) {
	let ess = get_all_ESs();
	ess.then((result) => {
		console.log(result)
		res.send({ESs: result})
	})
});

app.get("/ES/delete_all", function(req,res) {
	delete_all_ESs();
	console.log("ALL ES BE DELETED!")
	res.send({status: "Empty!"})
	res.end()
})

