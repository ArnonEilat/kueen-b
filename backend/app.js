const express = require("express");
// Creating the node app
const app = express();
// Port Environment variable
const port = process.env.PORT || 5000;

function emailRegex(input) {
  let regex = /[a-zA-Z]+@khealth\.com/i;
  return regex.test(input);
}

// Firing up the app on selected port
app.listen(port, () => {
  console.log("Example app listening on port " + port);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/validation", (req, res) => {
  console.log(req.query);
  let email = req.query.email;
  console.log("emailll: " + email);
  if (emailRegex(email)) {
    console.log("great");
    res.send({ line: "Logged in successfully!" });
  } else {
    res.send({ line: "Invalid Email. Please try again." });
  }
});

app.post("/assignToDate", (req, res) => {
  let user = req.query.user;
  let date = req.query.date;
  res.send({ line: "successfully!" + user + date });
});

app.on("error", (error) => {
  throw new Error(`[app]::ERROR:${error.message}`);
});
