/**
 * Created by Eric on 2017/7/25.
 */
//这个模块里面封装了所有对数据库的常用操作
var MongoClient = require('mongodb').MongoClient;
//不管数据库什么操作，都是先链接数据库，所以我们可以吧连接数据库封装成为函数

function _connectDB(callback) {
    var url = 'mongodb://localhost:27018/eric';
    // 连接数据库
    MongoClient.connect(url, function (err, db) {
        callback(err, db);
    })
}
_connectDB(function (err, db) {
//表示连接成功之后要做的事情
    if (err) {
        console.log(err);
        return;
    }
    console.log('链接成功');
});

exports.insertOne = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        db.collection(collectionName).insertOne(json, function (err, result) {
            callback(err, result);
            db.close();//关闭数据库
        });
    });
};