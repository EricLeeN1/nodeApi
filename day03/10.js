/**
 * Created by Eric on 2017/7/22.
 */
var express = require('express');
var app = express();
//静态服务
app.use('/jingtai',express.static('./public'));//一般都是往上写
// 新的路由
app.get('/',function (req,res) {
    res.send('哈哈哈');
});
//会自动识别err函数，如果有，那么这个函数就能捕获err
app.use(function (err,req,res) {
    if (err) {
        res.send('没有这个页面')
    }
});
app.listen(3000);