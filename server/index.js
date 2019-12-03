const express = require('express');
const cors = require('cors');
const model = require('../db/model');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

app.get('/products', (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3025, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port 3025...');
  }
});
