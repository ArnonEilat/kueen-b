const mongoose = require('mongoose');
const assert = require('assert');

const users = require('./models/user');
const dates = require('./models/date');

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
