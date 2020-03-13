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
});

app.get('/', (request, response) => {
  const sql = "INSERT INTO users(name, email) VALUES(?, ?)"
  con.query(sql, ['Jack', 'jack@example.co.jp'], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    response.send(result)
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))