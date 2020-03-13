const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd',
  database: 'express_db'
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected!');
// });

app.get('/', (req, res) => {
  const sql = "SELECT * FROM users";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.render('index', { users: result });
  });
});

app.post('/', (req, res) => {
const sql = "INSERT INTO users SET ?"
  con.query(sql, req.body, function (err, result, filds) {
    if (err) throw err;
    console.log(result);
    res.send('登録が完了しました');
    res.redirect('/');
  });
});

app.get('/create', (req, res) =>
  res.sendFile(path.join(__dirname, 'html/form.html')))

app.get('/edit/:id', (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  con.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.render('edit', { user: result });
  });
});

app.post('/update/:id', (req, res) => {
  const sql = "UPDATE users SET ? WHERE id =" + req.params.id;
  con.query(sql, req.body, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.redirect('/');
  });
});

app.get('/delete/:id',(req,res)=>{
  const sql = "DELETE FROM users WHERE id = ?";
  con.query(sql,[req.params.id],function(err,result,fields){
    if (err) throw err;
    console.log(result)
    res.redirect('/');
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))