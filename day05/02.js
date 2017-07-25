/**
 * Created by Eric on 2017/7/25.
 */
var express = require('express');
var app = express();
var db = require('./model/db.js');

app.get('/', function (req, res) {
    db.insertOne('teacher',{
        "name":"张三"
    },function (err,result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    })
});
app.listen(3000);