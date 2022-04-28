const mongoose = require('mongoose');

module.exports = function(mongoose){
    const Schema = mongoose.Schema;

const DateSchema = new Schema({
  
    Date: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
const model = mongoose.model('Date', DateSchema);
return model;
}


