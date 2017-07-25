/**
 * Created by Eric on 2017/7/25.
 */
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

app.get('/', function (req, res) {
    // url就是数据库的地址；/表示数据库
    // 加入数据库不存在，没有关系。程序会帮你自动创建一个
    var url = 'mongodb://localhost:27018/eric';
    // 连接数据库
    MongoClient.connect(url, function (err, db) {
        // 回调函数表示连接成功做的事情,db参数表示链接上的数据实体;
        if (err) {
            console.log("数据库链接失败");
            return;
        }
        console.log('数据库链接成功');
        //插入数据,如果没有会帮你创建
        db.collection('eric').insertOne({
            "name":"哈哈哈",
            "age":parseInt(Math.random()*100+10)
        },function (err,result) {
            //插入之后做的事情,result插入结果
            if (err) {
                console.log('插入失败');
                return;
            }
            // console.log(result);
            res.send(result);
            db.close();
        });
    });
    // res.send('你好');
});
app.listen(3000);