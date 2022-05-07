const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DateSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const DateModel = mongoose.model('Date', DateSchema);
module.exports = DateModel;
