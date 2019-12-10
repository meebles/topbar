const mysql = require('mysql');
const mysqlConfig = require('./mysql.config');

const database = mysql.createConnection({
  host: 'fec-search-bar-db.ca7313wkc6r9.us-east-2.rds.amazonaws.com',
  port: '3306',
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

module.exports = database;
