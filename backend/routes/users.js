const router = require("express").Router();
const { json } = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  User.find() //list of all users in User model
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.name;
  const mail = req.body.email;
  const newUser = new User({
    username,
    mail,
  });

  newUser.save().then(() => res.json(newUser._id));
});
//********trial*****************
let refreshTokens= [];
const generateAccessToken=(user)=>{
   return jwt.sign({ id: user._id }, "mySecretKey",{expiresIn:"15m"});
    res.json({ username: user.username, acsessToken });
}
const generateRefreshToken=(user)=>{
    return jwt.sign({ id: user._id }, "myRefreshSecretKey");
    res.json({ username: user.username, acsessToken });
}
router.route("/refersh").post((req, res) => {
  //take the refresh token from the user
  const refershToken= req.body.token;
  //send error if there is no token or it's invalid
  if(!refreshToken) return res.status.json("You are not authenticated");
  if(!refreshTokens.includes(refreshToken)){
      return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refershToken, "myRefreshSecretKey",(err,user)=>{
      err && console.log(err);
      refreshTokens=refreshTokens.filter((token)=>token!==refreshToken);
      const newAccessToken= generateAccessToken(user);
      const newRefreshToken=generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.status(200).json({
          acsessToken: newAccessToken,refreshToken: newRefreshToken 
      })
  });
  //if everything is ok. create new acsess token,refresh token and send to user
  })
router.route("/login").post((req, res) => {
  const username = req.body.name;
  const mail = req.body.email;
  const user = User.find((u) => {
    return u.mail === mail && u.username === username;
  });
  if (user) {
    const acsessToken=generateAccessToken(user);
    const refreshToken=generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
        id: user._id,
        acsessToken,refreshToken
    })
  } else {
    res.status(400).json("Username or password incorrect");
  }
});
const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(401).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = router;
