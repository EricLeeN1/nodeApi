var mongoose = require('mongoose');
var db = require('../models/db.js');

// 结构
var bookSchema = new mongoose.Schema({
    name: {type: String},
    author: {type: String},
    price: {type: Number}
    // type: {type: Array,"default":""}
});
//列出所有图书
bookSchema.statics.findAll =function (name,callback) {
  this.find({},callback);
};
//根据oid查找图书
bookSchema.statics.findBookById=function (id,callback) {
  this.findById({"_id":id},callback);
};
//更新图书信息
bookSchema.statics.updateBookInfo=function (conditions,update,options,callback) {
    this.update(conditions,update,options,callback);
};
// 模型,模型需要schema
var bookModel = db.model('Book', bookSchema);
module.exports = bookModel;
