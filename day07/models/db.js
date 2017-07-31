/**
 * Created by Administrator on 2017/7/31.
 */
var mongoose = require('mongoose');
//createConnection为每个来访的人都创建一个连接
var db = mongoose.createConnection('mongodb://127.0.0.1:27018/NodeJs');
db.once('open',function (callback) {
   console.log('数据库成功连接');
});