const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'edu24-edowon-database.c16ysptp6e8x.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'test1234',
  database : 'mydb'
});
connection.connect();
connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});
connection.end();
