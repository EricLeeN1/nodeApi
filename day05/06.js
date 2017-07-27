/**
 * Created by Eric on 2017/7/26.
 */
var express = require('express');
var app = express();
var db = require('./model/db.js');
var expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    if (req.session.login=='1') {
        res.send('欢迎您' + req.session.username);
    } else {
        res.send('您还没有登陆哦!');
    }
});
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/checklogin', function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    // 根据用户填写的姓名，到数据库里找这个文档，读出密码
    //如果读取的秘密和填写的密码一样，登录成功，
    //如果读取的秘密和填写的密码不一样，登录失败，
    //如果根本没有找到这个记录，说明登录名错误，
    db.find('users', {"username": username}, function (err, result) {
        if (result.length == 0) {
            res.send('你的登录名错误，没有这个注册用户');
            return;
        }
        var passwordFind = result[0].password;
        if (passwordFind == password) {
            req.session.login = "1";
            req.session.username = result[0].username;
            res.send('欢迎您:' + result[0].username);
        } else {
            res.send('密码错误');
        }
    })
});
app.listen(3000);
