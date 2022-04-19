const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/validation', (req, res) => {
  if (email.includes('@') && email.includes('.com')) {
    res.send('Log in successful!');
  } else {
    res.send('Invalid Email. Please try again.')
  };

});