/**
 * Created by Eric on 2017/7/26.
 */
var express = require('express');
var expressSession = require('express-session');
var app = express();
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.get('/', function (req, res) {
    if (req.session.login=='1') {
        res.send('欢迎您' + req.session.username);
    } else {
        res.send('您还没有登陆哦!');
    }
});
app.get('/login', function (req, res) {
    req.session.login = '1';//设置这个session
    req.session.username = "考拉";
    res.send('您已经成功登陆');
});
app.listen(3000);