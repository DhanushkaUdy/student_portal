const mongoose = required('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name : {type : String},
    last_name : {type : String},
    email : { type : String},
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);

