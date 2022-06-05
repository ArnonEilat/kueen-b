const router = require("express").Router();
const User = require("../models/user");

router.route("/").get((req, res) => {
  User.find() //list of all users in User model
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

function emailRegex(input) {
  const regex = /[a-zA-Z]+@khealth\.com/i;
  return regex.test(input);
}

router.route("/login").post((req, res) => {
  const mail = req.body.email;
  const password = req.body.password;
  User.find({ mail: mail }, async (err, result) => {
    if (err) {
      return res.status(500);
    }
    console.log(result);
    if (result.length === 0) {
      return res.status(400).json({ line: "Email is wrong. Please try again" });
    }
    if (result[0].password === password) {
      res.json(result[0].id);
    } else {
      return res.status(400).json({ line: "Password is wrong. please try again." });
    }
  });
});
router.route("/add").post((req, res) => {
  const username = req.body.name;
  const mail = req.body.email;
  const password = req.body.password;
  if (emailRegex(mail) && password.length >= 8 && username.length >= 2) {
    const newUser = new User({
      username,
      mail,
      password,
    });
    newUser
      .save()
      .then(() => res.json(newUser._id))
      .catch((err) => res.status(400).json("Error: " + err));
  } else if (!emailRegex(mail)) {
    return res.status(400).json({ line: "Invalid Email. Please try again" });
  } else if (username.length < 2) {
    return res.status(400).json({ line: "User name is too short. Please try again." });
  } else if (password.length < 8) {
    return res
      .status(400)
      .json({ line: "Password is shorter than 8 characters. Please try again." });
  }
});

module.exports = router;
