const router = require('express').Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()     //list of all users in User model
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.name;
    const mail = req.body.email;
    const newUser = new User({
        username,
        mail
    });

    newUser.save()
        .then(() => res.json(newUser._id))
});

module.exports = router;