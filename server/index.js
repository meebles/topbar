const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('You sent a get request to the server.');
});

app.listen(3025, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port 3025...');
  }
});
