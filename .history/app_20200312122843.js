const express = require('express')
const app = express()
const port = 3000

const con = mysql.createConnection({
  host: 'localgost',
  user: 'root',
  password: ''
});

con.connect(function (err) {
  // if (err) throw err;
  // console.log('Connected');
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))