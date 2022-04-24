const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log('Example app listening on port 5000!');
});

app.get('/validation', (req, res) => {
  console.log(req.query)
  let email = req.query.email;
  console.log('emailll: ' + email);
  if (email.includes('@') && email.includes('.com')) {
    console.log('great')
    res.send({express:'Log in successful!'});
  } else {
    res.send({express:'Invalid Email. Please try again.'})
  };

});


app.on("error", error => {
  throw new Error(`[app]::ERROR:${error.message}`);
});