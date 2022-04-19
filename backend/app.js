const express = require('express');
// Creating the node app
const app = express();
// Port Environment variable
const port = process.env.PORT || 5000;

// Firing up the app on selected port
app.listen(port, () => {
  console.log('Example app listening on port '+ port );
});

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

// Callback function for checking connecting or error
app.on("error", error => {
  throw new Error(`[app]::ERROR:${error.message}`);
});