const express = require('express');
const cors = require('cors');
const path = require('path');
const model = require('../db/model');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

app.get('/products', (req, res) => {
  model
    .getAllProducts()
    .then((data) => {
      res.send(data); // names currently not having correct characters
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

app.get('/sources/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'bundle.js'));
});

app.get('/sources/styles', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'stylesheet.css'));
});

app.get('/sources/fonts/NotoSans-Regular.tff', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', '/fonts', 'NotoSans-Regular.tff'));
});

app.get('/sources/fonts/NotoSans-Bold.tff', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/fonts/NotoSans-Bold.tff'));
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on server port...');
  }
});

//  FOR RUNNING LOCALLY

// app.listen(3025, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Listening on port 3025...');
//   }
// });
