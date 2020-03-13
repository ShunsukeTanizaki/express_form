const express = require('express')
const app = express()
const port = 3000
const path = require("path");
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
});

// app.get('/',function(req,res){
//   res.sendFile(__dirname + '/html/index.html'); 
// });/html/form.html

app.get('/', (req, res) => 
  res.sendfile(path.join(__dirname, '/html/form.html')))

// app.get('/', (request, response) => {
//   const sql = "INSERT INTO users SET ?"
//   con.query(sql, { name: 'Tommy', email: 'tommy@test.co.jp' }, function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     response.send(result)
//   });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))