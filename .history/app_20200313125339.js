const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/html/form.html')));

app.post('/', (req, res) => {
const sql = "INSERT INTO users SET ?"

  con.query(sql, req.body, function (err, result, filds) {
    if (err) throw err;
    console.log(result);
    // res.send('登録が完了しました');
    res.redirect('/');
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))