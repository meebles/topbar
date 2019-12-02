const mysql = require('mysql');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password17',
  database: 'fec_searchbar',
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the fec_searchbar database...');
  }
});
