const mongoose = required('mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({
    course: {
        type: String
    },
    assignment_name : {
        type: String
    },
    deadline: {
        type:String
    }
},{
    collection : 'assignment'
});

module.exports = mongoose.module('Assignment', Assignment);
