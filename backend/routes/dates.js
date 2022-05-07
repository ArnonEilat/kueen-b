const router = require('express').Router();
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const Dates = require('../models/date');

router.route('/').get((req, res) => {
    Dates.find()     //list of all users in Date model
        .then(dates => res.json(dates))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("add date");
    const user = req.body.user;
    const date = Date.parse(req.body.date);
    console.log(date);
    console.log(req.body.date);
    const newDate = new Dates({
        user,
        date: req.body.date,
    });

    newDate.save()
        .then(() => res.json('Date added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
