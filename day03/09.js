/**
 * Created by Eric on 2017/7/22.
 */
var express = require('express');
var fs = require('fs');
var app = express();

// 当你不写路径的时候，实际上就相当于'/'，就是所有网址
app.use(haha);
app.listen(3000);
function haha(req,res,next) {
    // res.send('哈哈');
    // 根据当前的网址，读取public文件夹中的文件
    //如果有这个文件，那么渲染这个文件
    //如果没有这个文件，那么next()
    var filepath = req.originalUrl;
    fs.readFile('./public/'+filepath,function (err,data) {
        if (err) {
            //文件不存在
            next();
            return;
        }
        res.send(data.toString());
    });
}
