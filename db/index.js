const mysql = require('mysql');
const mysqlConfig = require('./mysql.config');

const database = mysql.createConnection({
  host: 'localhost',
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: 'fec_searchbar',
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the fec_searchbar database...');
  }
});
