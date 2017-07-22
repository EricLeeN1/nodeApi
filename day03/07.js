var express = require('express');
var app = express();
//设置模板引擎
var a = 100;
app.get('/', function(req, res, next) {
    // a++;
    console.log('1');
    // res.send(a.toString());
    next();
});
app.get('/', function(req, res) {
    // a++;
    console.log('2');
    // res.send(a.toString());
});
app.listen(3000);