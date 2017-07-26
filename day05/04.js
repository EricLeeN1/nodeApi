/**
 * Created by Eric on 2017/7/26.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
//使用cookie必须要使用cookie-parser中间件
app.use(cookieParser());

app.get('/', function (req, res) {
    // maxAge在express中以毫秒为单位
    res.cookie('xihao', 'jingmin', {maxAge: 900000, httpOnly: true});
    res.send('猜你喜欢'+req.cookies.mudidi);
});
//查询一个地的攻略，URL语法就是:http:127.0.0.1:3000/gonglue?mudidi=北京
//此时北京就会被记录在cookie中
app.get('/gonglue', function (req, res) {
    //得到get请求，用户查询的目的地
    var mudidi = req.query.mudidi;
    //记录用户的喜好
    //先读取用户的喜好，然后把新的数据push进入数组，然后设置新的cookie
    var mudidiArray = req.cookies.mudidi || [];
    mudidiArray.push(mudidi);
    console.log(mudidiArray);
    res.cookie('mudidi', mudidiArray);
    res.send(mudidi+"旅游攻略");//
});
app.listen(3000);