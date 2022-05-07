const router = require('express').Router();
const Dates = require('../models/date');

router.route('/').get((req, res) => {
    Dates.find()     //list of all users in Date model
        .then(dates => res.json(dates))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user = req.body.user;
    const date = Dates.parse(req.body.date);
    const newDate = new Dates({
        user,
        date,
    });

    newDate.save()
        .then(() => res.json('Date added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
