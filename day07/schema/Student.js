var mongoose = require('mongoose');
var db = require('../models/db.js');

//创建了一个schema结构。
var studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    sex: {type: String},
    time: {type: Date, default: Date.now}
});
//创建了一个模型。就是学生模型，就是学生类
// 创建查找的静态方法
studentSchema.statics.findByName = function (name, cb) {
    this.find({name: name}, cb);
};
// 创建修改的静态方法
studentSchema.statics.change= function (conditions,update,options,callback) {
    this.update(conditions,update,options,callback);
};
//类是基于schema机构
var studentModel = db.model('student', studentSchema);
//向外暴露
module.exports = studentModel;