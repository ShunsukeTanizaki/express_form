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
  const sql = "insert into users(name, email) values('kevin, kevin@test.com')"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result)
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))