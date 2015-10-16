var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'mysql',
  database : 'twitter'
});
connection.connect();
var mail= "ankitjais@gmail.com";
var name="Ankit Jaiswal";
connection.query('select password from userInfo where email = ?',[mail], function(err,result,fields){
  if(err) throw err;
  console.log(Error(err));
});
connection.end();
$ npm install mysql
