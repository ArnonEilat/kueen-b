const router = require("express").Router();
const User = require("../models/user");

router.route("/").get((req, res) => {
  User.find() //list of all users in User model
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

function emailRegex(input) {
  let regex = /[a-zA-Z]+@khealth\.com/i;
  return regex.test(input);
}

router.route("/login").post((req, res) => {
  const mail = req.body.email;
  const password = req.body.password;
  User.find({ mail: mail},async(err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({line:'email is wrong.Please try again'});
    }console.log("userfound");
      if(result[0].password===password){
        console.log(result[0].password);
        console.log(result[0].id);
        res.json(result[0].id);
      }
      else{
        console.log("wrongpass");
        console.log(result[0].password);
       res.status(400).json({line:'password is wrong.please try again.'});
      }})
    
         
});
router.route("/add").post((req, res) => {
  const username = req.body.name;
  const mail = req.body.email;
  const password = req.body.password;
  if (emailRegex(mail) && password.length >= 8 && username.length >= 2) {
    console.log("great");
    const newUser = new User({
      username,
      mail,
      password
    });
    newUser.save().then(() => res.json(newUser._id)).catch(err => res.status(400).json('Error: ' + err));
  } else if (!emailRegex(mail)) {
    console.log("rrrr");
    res.status(400).json({line:'Invalid Email. Please try again'});   
  } else if (username.length < 2) {
    res.status(400).json({line:'User name is too short. Please try again.'});
    console.log("rrr2");
  } else if (password.length < 8) {
    console.log("rrr3");
    res.status(400).json({line:'Password is too short. Please try again.'});
  }
});

module.exports = router;
