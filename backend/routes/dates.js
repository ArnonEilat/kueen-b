const router = require('express').Router();
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const Dates = require('../models/date');
const Users = require('../models/user');

router.route('/').get((req, res) => {
    Dates.find()     //list of all dates in Date model
        .then(dates => res.json(dates))
        .catch(err => res.status(400).json('Error: ' + err));
});

const userPromiseFunc = (_id) => {
    return new Promise((resolve, reject) => {
        Users.find({ _id: _id }, (err, result2) => {
            if (err) {
                return reject(err)
            }
            resolve(result2[0].username)
        });
    })
}

router.route('/getPerDate').post((req, res) => {
    const currentDate = req.body.date;
    console.log(currentDate);

    Dates.find({ date: currentDate }, async (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            const userPromiseArray = [];

            result.forEach((elem) => {

                const usrPromise = userpromisefunc(elem.user)
                userPromiseArray.push(usrPromise)

            });
            const users = await Promise.all(userPromiseArray)
            console.log(users, "this is the whole namesusersarrsay");
            res.send(users);
            console.log(users);
        }
    });
});

router.route('/add').post((req, res) => {
    const user = req.body.user;
    const date = Date.parse(req.body.date);
    const newDate = new Dates({
        user,
        date: req.body.date,
    });

    newDate.save()
        .then(() => res.json('Date added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
