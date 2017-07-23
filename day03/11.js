/**
 * Created by Eric on 2017/7/22.
 */
var express = require('express');
var app = express();
// app.set('views','a');
// 自己设置文件夹名字
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('haha',{news:[]});
});
app.get('/check',function (req,res) {
    res.send({
        "user":"ok"
    });
});
app.listen(3000);