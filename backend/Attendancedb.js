const mongoose = require('mongoose');
const assert = require('assert');

//import users
const users = require('./user');

//import dates
const dates = require('./date');

//connect
MONGODB_URL = 'mongodb://localhost:27017/mydb';
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


