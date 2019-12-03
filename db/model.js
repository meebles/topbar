const Promise = require('bluebird');
const db = require('./index.js');

module.exports.getAllProducts = () => new Promise((resolve, reject) => {
  const sqlString = 'SELECT * FROM products;';

  db.query(sqlString, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports.getHistory = () => new Promise((resolve, reject) => {
  const sqlString = 'SELECT * FROM history;';

  db.query(sqlString, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});
