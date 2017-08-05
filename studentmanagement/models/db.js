var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/studentmanage');
var db = mongoose.connection;
db.once('openUri', function (callback) {
    console.log('数据库成功打开');
});
module.exports = db;