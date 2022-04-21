const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
})

app.get('/a', function (req, res) {
  res.send('Hello!');
});