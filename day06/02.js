var express = require('express');
var app = express();
var formidable = require('formidable');
var db = require('./model/db.js');
var md5 = require('./model/md5.js');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//注册页面
app.get('/register', function (req, res) {
    res.render('register');
});
//执行注册
app.post('/chenckregister', function (req, res) {
    // res.render('register');
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var username = fields.username;
        var password = md5(md5(fields.password).substr(3, 8) + md5(fields.password));
        // 检索有没有重名
        db.insertOne('users', {
            "username": username,
            "password": password,
            "timeStamp":Date.parse(new Date())/1000
        }, function (err, result) {
            if (err) {
                res.json({
                    "msgcode":0,
                    "msg":'注册失败'
                });
                return;
            } else {
                res.json({
                    "msgcode":1,
                    "msg":'注册成功'
                });
                return;
            }
        });
    });
});
// 登录
app.get('/login', function (req, res) {
    res.render('login');
});
// 登录验证
app.post('/checklogin',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var username = fields.username;
        var password = fields.password;
        console.log(fields.password,fields.username);
        var password1 = md5(md5(password).substr(3, 8) + md5(password));
        console.log(fields.password,password);
        // 检索有没有重名
        db.find('users', {
            "username": username
        }, function (err, result) {
            if (result.length==0) {
                res.json({
                    "msgcode":0,
                    "msg":'该用户尚未注册'
                });
                return;
            }else {
                var passwordTrue = result[0].password;
                if (password1 == passwordTrue) {
                    res.json({
                        "msgcode":1,
                        "msg":'登录成功'
                    });
                    return;
                }else {
                    res.json({
                        "msgcode":-1,
                        "msg":'密码错误'
                    });
                    return;
                }
            }
        });
    });
});

app.listen(3000);
