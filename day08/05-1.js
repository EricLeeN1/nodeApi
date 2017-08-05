var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/test');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});
//学生、课程
var studentSchema = new mongoose.Schema({
    "name": String,
    "age": Number,
    "sex": String
});
// 通过课程找学生
studentSchema.methods.addAge=function () {
    this.age++;
    this.save();
};
var Student = mongoose.model("Student", studentSchema);
var courseSchema = new mongoose.Schema({
    "name": String,
    "info": String,
    "student": [studentSchema]
});
courseSchema.methods.addStudent = function (studentObj, callback) {
    this.student.push(studentObj);
    this.save(function () {
        callback();
    });
};
var Course = mongoose.model('Course', courseSchema);

// 实例化对象
// Student.create({ "name": "小明", "sex": "男", "age": 18 });
// Student.create({ "name": "小红", "sex": "女", "age": 16 });
// Student.create({ "name": "小明", "sex": "男", "age": 17 });
// Student.create({ "name": "小芳", "sex": "女", "age": 15 });
//
// var xiaochen = new Student({"name": "小陈", "sex": "男", "age": 16});
// xiaochen.save();
// var math = new Course({
//     "name": "数学课",
//     "info": "学数学的"
// });
// math.addStudent(xiaochen,function () {
//    console.log('添加成功');
// });
// Student.findOne({"name":"小陈"},function (err,student) {
//     student.sex="女";
//     student.save();
// });
Course.findOne({"name":"数学课"},function (err,course) {
    var student = course.student[0];
    course.student[0].age++;
    course.save();
});