const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd',
  database: 'express_db'
});


con.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	const sql = "SELECT * from users";
	con.query(sql, function (err, result, fields) {  
	if (err) throw err;
    console.log(result);
    console.log(result[0].email);
	});
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))