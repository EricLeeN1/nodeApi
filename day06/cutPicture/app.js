var express = require('express');
var app = express();
var fs =require('fs');
var gm = require('gm');

app.set('view engine','ejs');
app.use(express.static('./public'));
app.get('/',function (req,res) {
    res.render('index');
});
app.get('/docut',function (req,res) {
    // 这个页面接收几个get请求参数
    // 文件名/w/h/x/y
    var filename = req.query.filename;
    var w = req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm('./picture/1.jpg')
        .crop(w,h,x,y)//宽、高、x、y
        .resize(100,100,"!")
        .write('./picture/1-1.jpg',function (err) {
            if (err) {
                res.json({
                    "msgcode":-1,
                    "msg":"裁剪失败"
                });
                return;
            }else {
                res.json({
                    "msgcode":1,
                    "msg":"裁剪成功"
                });
                return;
            }
        });
});
app.listen(3000);