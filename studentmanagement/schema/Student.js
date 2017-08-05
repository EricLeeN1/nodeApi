var mongoose = require('mongoose');

//schema
var studentSchema =  new mongoose.Schema({
    'sid':Number,
    "name":String,
    "age":Number,
    "sex":String,
    "course":[Number]       //存放课程的kid
});
studentSchema.index({"sid":1});

//model
var Student = mongoose.model("Student",studentSchema);

module.exports = Student;