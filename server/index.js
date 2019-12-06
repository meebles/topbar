const express = require('express');
const cors = require('cors');
const model = require('../db/model');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

app.get('/products', (req, res) => {
  model
    .getAllProducts()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/history', (req, res) => {
  model
    .getHistory()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/history', (req, res) => {
  model
    .addHistory(req.body.searchItem)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete('/history', (req, res) => {
  model
    .clearHistory()
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
