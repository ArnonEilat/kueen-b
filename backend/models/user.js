const mongoose = require('mongoose');

module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        }
    });
    const user = mongoose.model('User', UserSchema);
    return user;
}