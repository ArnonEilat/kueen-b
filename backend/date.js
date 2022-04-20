const mongoose = require('mongoose');

// module exports is a function that takes as a parameter  - mongoos,
//then create a schema - and afterwards creates a model with the schema we created
//and the name date (/not dates)
// and then returns this model;
module.exports = function(mongoose){
    const Schema = mongoose.Schema;

const DateSchema = new Schema({
  
    Date: {
        type: String,
        required: true
    },
    user: {
        //It is still not necessarily the best course of action
        //the importance of the user is the fact we could use this reference to take all of the id 
        // that are store here and through them to find the actuall names in the users "table"
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const model = mongoose.model('Date', DateSchema);
return model;
}


