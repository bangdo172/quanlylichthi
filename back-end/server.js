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



function insert_subject(id, name) {
	con.connect(function(err) {
	// if (err) throw err;
	console.log('Connected!');
	var sql = "INSERT INTO Subject (subject_id, subject_name) VALUES ('"+id+"', '"+name+"')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result)
	});
});
}


function list_subject() {
	var result_ = []
	// cho t thử nhé
	// ddowij tis
	// ok chuaw
	// ok
	// Có phải 
	return new Promise((resolve, reject) => {
		con.connect(function(err) {
		console.log('Connected!');
		var sql = "SELECT * FROM Subject";
		con.query(sql, function(err, result) {
			if (err) reject(err);
			// console.log("List all subject: ");
			// console.log(result[0].subject_id);
			// console.log(typeof result);
			// console.log(result)
			// try for loop here
			// for (i = 0; i < result.length; i ++) {
			// 	result_.push(result[i])
			// 	// console.log(result[i])
			// 	// console.log('________')
			// 	// console.log(result_[i])
			// }
			// result_ = result
			// console.log('____________' + result_)
			// for (i = 0; i < result_.length; i ++) {
			// 	console.log('++++++')
			// ALO oong
			// Đáng nhẽ cái con.connect phải để ngoài chứ ông
			// 	console.log(result_[i])
			// }
			resolve(result)
			// console.log("ABC: ", result)
		});
	});
	})
	
	// console.log("RESULT___: " + result_[2])
	// console.log(typeof result_)
	// console.log(typeof result)
	// return result_
}

// for (i = 0; i < listSubject().length; i ++) {
// 	console.log(listSubject()[i])
// 	console.log('zzzzzzzzzz')
// }

// insert_subject('5', 'Nhập môn ATTT');
let a = list_subject();
console.log("ABC: ",a)
a.then((result) => {
	console.log("-------: ",result)
}).catch((err) => {
	console.log(err)
})

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

app.post("/subject/insert", function(req, res) {
	check = true;
	console.log(list_subject())
	console.log(typeof list_subject())
	var listSubject = list_subject()
	for (i = 0; i < listSubject.length; i ++) {
		console.log(listSubject[i])
		console.log('xxxxxxxxx')
	}
	// console.log("LIST SUBJECT: " +listSubject[0])
	for (i = 0; i < Object.keys(listSubject).length; i ++) {
		if (req.body.Id == list_subject[i].subject_id) {
			console.log(req.body.Id, list_subject[i].subject_id)
			check = false;
		}
	}
	console.log(check);
	// if (check == true) {
	// 	insert_subject(req.body.Id, req.body.Name);
	// 	console.log(req.body.Id, req.body.Name);
	// 	res.send({status: "Inserted!"})
	// }
	// else {
	// 	console.log("Existed!")
	// 	res.send({status: "Existed!"})
	// }
	
	res.end()
});
