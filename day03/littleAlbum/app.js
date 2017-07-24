var express = require('express');
var app = express();
var router = require('./controller/router');
app.set('view engine', 'ejs');

//路由中间件
app.use(express.static('./public'));
app.get('/', router.showIndex);