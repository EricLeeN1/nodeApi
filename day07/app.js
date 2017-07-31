// 引包
var db =require('./models/db.js');

var Student = require('./schema/Student.js');
//实例化一个对象
// var xiaoming=new Student({
//     "name":"小明",
//     "age":"12",
//     "sex":"男"
// });
// //保存这个学生类
// xiaoming.save(function () {
//    console.log('存储成功');
// });

// Student.create({"name":"小红","age":12,"sex":"女"},function (err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('保存成功');
// });
// Student.findByName("小明",function (err,result) {
//    console.log(result);
// });
Student.change({"name":"小红"},{$set:{"age":30}},{},function (err) {
    if (err) {
        console.log(err);
    }else {
        console.log('改名成功');
    }
});