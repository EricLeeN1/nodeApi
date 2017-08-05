var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/test');

var db = mongoose.connection;
db.once('open', function(callback) {
    console.log("数据库成功打开");
});
//学生、课程
var studentSchema = new mongoose.Schema({
    "name": String,
    "age": Number,
    "sex": String
});
var Student = mongoose.model("Student", studentSchema);
var courseSchema = new mongoose.Schema({
    "name": String,
    "info": String,
    "student": [studentSchema]
});
var Course = mongoose.model('Course', courseSchema);