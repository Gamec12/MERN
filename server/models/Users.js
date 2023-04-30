const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },

    userName: {
        type: String,
        required: true
    },
});


//create a model out of this schema

const UserModel = mongoose.model("users", UserSchema); // takes model name and the schema 
// this will also automatically create the collection?

module.exports = UserModel // so that we can make changes to our table or collection throughout the applitcation (have acess to it outside of the file)