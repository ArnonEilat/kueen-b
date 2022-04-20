const mongoose = require('mongoose');
//const { call } = require('ramda');
const assert = require('assert');

//import users
const users = require('./user');
 console.log( "users ",users); 
 //import dates
const dates = require('./date');
console.log("dates ",dates);

//connect : 
mongoose.connect('mongodb://localhost:27017/mydb',
 { useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
if (!err) { 
    //this is the actuall creation
    const UsersModel = users(mongoose);
    console.log("usersmodel ", UsersModel);
    const DatesModel = dates(mongoose);
    console.log("datesmodel ", DatesModel);

    //this is an exmple of a single insertion to the collection we have now created
    // const newuser = new UsersModel({
    //     name: "fakeuser",
    //     mail: "fakemail"
    // })
    //  newuser.save(); 
    //this is an exmple of 6 insertions to the collection we have now inserted
    //insertDocuments(UsersModel);
    //console.log("fakeuser ", newuser); // see the object that is the user we have inserted

    console.log('Successfully Connected in MongoDB') }
else { 

    console.log('Syntax Error: ' + err) }
});

//still not in use:: an exmple
// insert documents // exmple
const insertDocuments = function(collectioni) {
    // the problem is in the compilation i am recreating users table
    collectioni.insertMany([
        {name: "noa" , mail: "noa.."},
        {name: "shir" , mail: "shir.."},
        {name: "shir2" , mail: "shir2.."},
        {name: "liel" , mail: "liel.."},
        {name: "yasmin" , mail: "yasmin.."},
        {name: "hanan" , mail: "hanan.."}], function(err, result){
            console.log(result);
            assert.equal(err, null);
         //   assert.equal(6, result.result.n);
            console.log("inserted 6 users in the collection");
            // callback(result);
        });
}
// still not in use - an exmple:
// finding the users in those dates
// still needed to take the id and then go to the users and take the name and give the names as the body 
// this is just an exmple
const findDocuments = function(db, thedate) {
    const collectionofdates = db.collection('dates');
    collectionofdates.find({date: thedate}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
    //   callback(docs);
    });
  }

  
  



