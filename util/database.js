var mysql = require('mysql');

var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
module.exports = pool.connect();