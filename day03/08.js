/**
 * Created by Eric on 2017/7/22.
 */
var express = require('express');

var app = express();

// 当你不写路径的时候，实际上就相当于'/'，就是所有网址
app.use(function (req,res,next) {
   console.log(new Date());
   next();
});
app.use('/admin', function (req, res) {
    res.write(req.originalUrl+'\n');
    res.write(req.path+'\n');
    res.write(req.baseUrl+'\n');
    res.end('你好');
});
app.listen(3000);