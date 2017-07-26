/**
 * Created by Eric on 2017/7/25.
 */
//这个模块里面封装了所有对数据库的常用操作
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var settings = require('../setting.js');
//不管数据库什么操作，都是先链接数据库，所以我们可以吧连接数据库封装成为函数
//封装成内部函数
function _connectDB(callback) {
    //从settings文件中读取地址
    var url = settings.dburl;

    // 连接数据库
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(err, null);
            return;
        }
        console.log('连接成功');
        callback(err, db);
    })
}
// _connectDB(function (err, db) {
// //表示连接成功之后要做的事情
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('链接成功');
// });
// 插入数据
exports.insertOne = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        db.collection(collectionName).insertOne(json, function (err, result) {
            callback(err, result);
            db.close();//关闭数据库
        });
    });
};
// 查找数据，找到所有数据。args是个对象{"pageamount":10,"limit":10}
//参数:collectionName,json,args,callback
exports.find = function (a, b, c, d) {

    var result = [];
    if (arguments.length == 3) {
        // 那么参数args就是callback
        var callback = c;
        var args = {"pageamount": 10, "limit": 10};
    } else if (arguments.length == 4) {
        var callback = d;
        var args = c;
    } else {
        throw new Error('find函数的参数个数是三个或者四个');
        return;
    }
    //应该省略的条数
    var skipnumber = args.pageamount * args.page;
    //数目限制
    var limit = args.pageamount;
    //连接数据库，连接之后查找所有
    _connectDB(function (err, db) {
        var cursor = db.collection(a).find(b).skip(skipnumber).limit(limit);
        cursor.each(function (err, doc) {
            if (err) {
                callback(err, null);
                db.close();//关闭数据库
                return;
            }
            if (doc != null) {
                result.push(doc);
                //放入结果数组
            } else {
                //遍历结束.没有很多的文档，
                callback(null, result);
                db.close();//关闭数据库
            }
        })
    })
};
//删除
exports.delete = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        db.collection(collectionName).deleteMany(
            json,
            function (err, results) {
                callback(err, results);
                db.close();//关闭数据库
            })
    });
};
//修改
//修改的集合，哪个文档，改成什么样，返回函数
exports.update = function (collectionName, json1,json2, callback) {
    _connectDB(function (err, db) {
        db.collection(collectionName).updateMany(
            json1,
            json2,
            function (err, results) {
                callback(err, results);
                db.close();//关闭数据库
            })
    });
};
