const mongoose = require('mongoose');

//A Short Explanation:

// module.exports is a function that takes as a parameter - mongoos,
//then creates a schema afterwards it creates a model with the schema we created
//and the name user (/not users)
// and the returns this model;
module.exports = function(mongoose){
    const Schema = mongoose.Schema;

    // hhhhhhhdfghdfghdrghdfhj
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
