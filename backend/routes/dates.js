const router = require('express').Router();
const Date = require('../models/date');

router.route('/').get((req , res) => {
    User.find()     //list of all users in User db
    .then(dates => res.json(dates))
    .catch(err => res.status(400).json('Error: ' + err));
} );

router.route('/add').post((req , res) => {
    const user = req.body.user;
    const date = req.body.date;
    const newDate = new Date({user,
    date,
});

    newDate.save()
    .then(()=>res.json('Date added!'))
    .catch(err => res.status(400).json('Error: ' + err));
} );

module.exports = router;