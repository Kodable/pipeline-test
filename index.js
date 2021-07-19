const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('OK')
});

app.get('/new-route', function (req, res) {
  res.send('OK!')
});

console.log('app started');
app.listen(PORT);
