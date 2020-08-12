const express    = require('express');
const mysql      = require('mysql');
//const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection({
  host     : 'edu24-edowon-database.c16ysptp6e8x.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'test1234',
  database : 'mydb'
});
//const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
            (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(ip);
    res.send('Hello, World! : ' + ip + "," + new Date());
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
