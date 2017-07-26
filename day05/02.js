/**
 * Created by Eric on 2017/7/25.
 */
var express = require('express');
var app = express();
var db = require('./model/db.js');

app.get('/', function (req, res) {
    //三个参数，往哪个集合中增加，增加什么，增加之后做什么
    db.insertOne('teacher', {
        "name": "张三"
    }, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});
app.get('/du', function (req, res) {
    //这个页面现在接收一个page参数;
    var page = parseInt(req.query.page);//express读取get参数很简单
    //查找四个参数，在那个集合查，查什么(),分页设置，查完之后做什么
    db.find('teacher', {"name": "张三"}, {"pageamount": 10, "limit": page}, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    })
});
app.get('/shan', function (req, res) {
    var id = req.query.id;
    console.log(id);
    db.delete('teacher', {"name": id}, function (err, result) {
        res.send(result);
    });
});
app.listen(3000);