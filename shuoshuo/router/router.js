/**
 * Created by Eric on 2017/7/27.
 */
var formidable = require('formidable');
//显示首页
exports.showIndex=function (req,res,next) {
    res.render('index');
};
//注册页面
exports.showRegister=function (req,res,next) {
    res.render('register');
};
//注册业务
exports.checkRegister=function (req,res,next) {
    var form = new formidable.IncomingForm();
    form.parse(req,function (err,fields,files) {
        //得到用户的填写信息
        var username = fields.username;
        var password = fields.password;
        console.log(username,password);
        //查询数据库中是否存在此人，不存在则添加
    });
};