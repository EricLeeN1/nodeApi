var mongoose = require('mongoose');

//schema
var CourseSchema = new mongoose.Schema({
    'cid': Number,
    "name": String,
    "students": [Number]  //这个数组存放的是学生的sid
});

CourseSchema.index({"cid": 1});
CourseSchema.statics.addStudent = function (cidArray, sid) {
    for (var i = 0; i < cidArray.length; i++) {
        Course.update({"cid": cidArray[i]}, {$push: {"students": sid}}, function () {
            console.log("课程添加了啊");
        });
    }
};
//model
var Course = mongoose.model("Cousrse", CourseSchema);

module.exports = Course;