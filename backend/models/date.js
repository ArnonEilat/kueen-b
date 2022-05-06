const mongoose = require('mongoose');

module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    const DateSchema = new Schema({

        Date: {
            type: Date,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    });
    const date = mongoose.model('Date', DateSchema);
    return date;
}