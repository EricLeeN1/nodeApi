// 引包
var mongoose = require('mongoose');
//createConnection为每个来访的人都创建一个连接
var db = mongoose.createConnection('mongodb://127.0.0.1:27018/NodeJs');
//监听open事件
db.once('open', function (callback) {
    console.log('数据库成功连接');
});
//向外暴露
module.exports = db;