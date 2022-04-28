const mongoose = require('mongoose');

module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        }
    });
    const model = mongoose.model('User', UserSchema);
    return model;
}