/**
 * Created by Eric on 2017/7/31.
 */
// 公式
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// session公式
var session = require('express-session');
app.use(session({
    secret:'Eric Lee',
    resave:false,
    saveUninitialized:true
}));
app.set('view engine', 'ejs');
var alluser = [];
//中间件
app.get('/', function (req, res, next) {
    res.render('index');
});
//确认登录,检查此人是否有用户名，并且不能重复
app.get('/check', function (req,res,next) {
    var name = req.query.name;
    if (!name) {
        res.send('必须填写用户名');
        return;
    }
    console.log(alluser.indexOf(name));
    if (!alluser.indexOf(name)) {
        res.send('用户名已经被占用');
        return;
    }
    alluser.push(name);
    console.log(alluser);
    //付给session
    req.session.name = name;
    res.redirect('/chat');
});
app.get('/chat',function (req,res,next) {
    res.render('chat');
});
//监听
http.listen(3000);