var express = require('express');
var app = express();
var router = require('./router/router.js');

var session = require('express-session');

app.use(session({
    secret: 'Eric Lee',
    resave: false,
    saveUninitialized: true
}));

//模板引擎
app.set('view engine','ejs');
//静态页面
app.use(express.static('./public'));
app.use("/avatar",express.static('./avatar'));
//路由表
app.get('/',router.showIndex);
app.get('/register',router.showRegister);
app.post('/checkregister',router.checkRegister);
app.get('/login',router.showLogin);
app.post('/checklogin',router.checkLogin);
app.get('/setavatar',router.showsetAvatar);
app.post('/cutavatar',router.showcutAvatar);
app.get('/cut',router.showCut);
app.get('/docut',router.checkCut);
app.post('/publishblog',router.publishBlog);
app.get('/getallblogs',router.getAllBlogs);    //列出所有说说
app.get('/getuserinfo',router.getUserInfo);    //列出用户信息
app.get('/getblogscount',router.getBlogsCount);    //列出用户信息
app.get('/user/:username',router.showUser);
app.get('/blogs/:oid',router.showblogs);
app.get('/userlist',router.showUserList);

app.listen(3000);
