const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

MONGODB_URL = 'mongodb+srv://shir:shir@cluster0.oxayx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URL,
    { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (!err) {
            //this is the actuall creation
            const UsersModel = users(mongoose);
            const DatesModel = dates(mongoose);
            console.log('Successfully Connected in MongoDB')
        }

        else {
            console.log('Syntax Error: ' + err)
        }
    });

    const users = require('./models/user');
    const dates = require('./models/date');
    
    const datesRouter = require('./routes/dates');
    const usersRouter = require('./routes/users');
    
    app.use('/dates',datesRouter);
    app.use('/users',usersRouter);
    
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
    res.send({ line: "Ok" });
  } else {
    res.status(400);
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
