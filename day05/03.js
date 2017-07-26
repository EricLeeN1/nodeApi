/**
 * Created by Administrator on 2017/7/26.
 */
var express = require('express');
var app = express();
var db = require('./model/db.js');
var formidable = require('formidable');

//设置模板引擎
app.set('view engine', 'ejs');

//静态服务
app.use(express.static('./public'));
//显示留言列表
app.get('/', function (req, res, next) {
    res.render('index');
});
//显示留言列表
app.get('/du', function (req, res, next) {
    db.find('messages',{},function (err,result) {
       res.json({"result":result});
    });
});
//处理留言
app.post('/submit', function (req, res,next) {
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields) {
        db.insertOne("messages",{
            "name":fields.name,
            "message":fields.message
        },function (err,result) {
            if (err) {
                res.json({
                    "msgcode":0,
                    "msg":"提交失败!"
                });//0是给Ajax看的
                return;
            }
            res.json({
                "msgcode":1,
                "msg":"提交成功!"
            });
        });
    });
});
app.listen(3000);