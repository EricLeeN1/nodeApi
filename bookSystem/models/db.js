var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://127.0.0.1:27018/book');

db.once('open', function (callback) {
    console.log('数据库成功连接');
});
module.exports = db;
