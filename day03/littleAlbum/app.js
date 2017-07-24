var express = require('express');
var app = express();
var router = require('./controller/router');

// 设置模板引擎
app.set('view engine', 'ejs');

// 路由中间件
// 静态页面
app.use('/static', express.static('./public'));
// 首页
app.get('/', router.showIndex);
app.listen(3000);