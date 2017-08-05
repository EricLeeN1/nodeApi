var Student = require('../schema/Student.js');
var Course = require('../schema/Course.js');
var db = require('../models/db.js');
// Course.create({"cid":201701,"name":"语文课"});
// Course.create({"cid":201702,"name":"数学课"});
// Course.create({"cid":201703,"name":"英语课"});
exports.showIndex = function (req, res, next) {
    Student.find({},function (err,result) {
        res.render('index',{
            "students":result
        });
    });
};
//插入表单
exports.showAdd = function (req, res, next) {
    Course.find({},function (err,courses) {
        if (err) {
            console.log(err);
            return;
        }
        res.render('add',{
            "courses":courses
        });
    });
};
//执行插入
exports.doAdd = function (req, res, next) {
    //存储数据
    console.log(typeof (req.query.course));
    Student.create(req.query,function (err,result) {
        Course.addStudent(req.query.course,req.query.sid,function (err,result) {
            res.send('插入成功');
        });
    });
};
//显示修改
exports.edit = function (req, res, next) {
    //存储数据
    var sid = parseInt(req.params['sid']);

    Student.findOne({"sid":sid},function (err,result) {
        Course.find({},function (err,courses) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('edit',{
                "student":result,
                "courses":courses
            });
        });
    });
};
//执行修改
exports.doEdit = function (req, res, next) {
    //存储数据
    var sid = parseInt(req.params['sid']);
    Student.update({"sid":sid},req.query,function (err,result) {
        console.log(result);
        res.send('修改成功');
    });
};
//删除
exports.doRemove = function (req, res, next) {
    //存储数据
    var sid = parseInt(req.params['sid']);
    Student.remove({"sid":sid},function (err,result) {
        console.log(result);
        res.send('删除成功');
    });
};