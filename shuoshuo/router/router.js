/**
 * Created by Eric on 2017/7/27.
 */
var formidable = require('formidable');
var db = require('../models/db.js');
var md5 = require('../models/md5.js');
var sd = require('silly-datetime');
var gm = require('gm');
var path = require('path');
var fs = require('fs');

//显示首页
exports.showIndex = function (req, res, next) {

    if (req.session.login == "1") {
        var username = req.session.username;
        var login = true;
    } else {
        var username = "";
        var login = false;
    }
    db.find("users", {"username": req.session.username}, function (err, result) {
        if (result.length == 0) {
            var avatar = "default.png";
        } else {
            var avatar = result[0].avatar;
        }
        db.find('blogs',{},function (err,resultblogs) {
            res.render('index', {
                "login": login,
                "username": username,
                "active": "index",
                "avatar": avatar,
                "blogs":resultblogs
            });
        });
    });
};
//注册页面

exports.showRegister = function (req, res, next) {
    res.render('register', {
        "login": req.session.login == "1" ? true : false,
        "username": req.session.login == "1" ? req.session.username : "",
        "active": "register"
    });
};
//注册业务
exports.checkRegister = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到用户的填写信息
        var username = fields.username;
        var password = fields.password;
        //查询数据库中是否存在此人，不存在则添加
        db.find('users', {"username": username}, function (err, result) {
            if (err) {
                res.json({
                    "msgcode": -3,
                    "msg": "服务器错误"
                });
                return;
            } else {
                if (result.length != 0) {
                    res.json({
                        "msgcode": -1,
                        "msg": "当前用户已注册"
                    });
                    return;
                } else {
                    //没有相同的人就可以执行接下来的方法了
                    //设置md5加密
                    password = md5(md5(password) + 'eric');
                    db.insertOne("users", {
                        "username": username,
                        "password": password,
                        "avatar": "default.png"
                    }, function (err, result) {
                        if (err) {
                            res.json({
                                "msgcode": -3,
                                "msg": "服务器错误"
                            });
                            return;
                        } else {
                            req.session.login = "1";
                            req.session.username = username;
                            res.json({
                                "msgcode": 1,
                                "msg": "注册成功!"
                            });
                            return;
                        }
                    });
                }
            }
        });
    });
};
//注册页面
exports.showLogin = function (req, res, next) {
    res.render('login', {
        "login": req.session.login == "1" ? true : false,
        "username": req.session.login == "1" ? req.session.username : "",
        "active": "login"
    });
};
//登录页面的执行
exports.checkLogin = function (req, res, next) {
    //查询数据库看看有没有这个人，有的话进一步看看这个人的密码是否匹配
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var username = fields.username;
        var password = fields.password;
        db.find('users', {"username": username}, function (err, result) {
            if (err) {
                res.json({
                    "msgcode": -3,
                    "msg": "服务器错误"
                });
                return;
            } else {
                if (result.length == 0) {
                    res.json({
                        "msgcode": -1,
                        "msg": "当前用户不存在"
                    });
                    return;
                } else {
                    //设置md5加密
                    password = md5(md5(password) + 'eric');
                    if (password == result[0].password) {
                        req.session.login = "1";
                        req.session.username = username;
                        res.json({
                            "msgcode": 1,
                            "msg": "登录成功"
                        });
                        return;
                    } else {
                        res.json({
                            "msgcode": -2,
                            "msg": "密码不正确"
                        });
                        return;
                    }
                }
            }
        });
    });
};
//设置头像页面必须保障此时是登录状态
exports.showsetAvatar = function (req, res, next) {
    if (req.session.login != "1") {
        res.send("您还没有登录呢!");
        return;
    } else {
        res.render('setAvatar', {
            "login": true,
            "username": req.session.username,
            "active": "login"
        });
    }
};
//设置头像
exports.showcutAvatar = function (req, res, next) {
    if (req.session.login != "1") {
        res.send("您还没有登录呢!");
        return;
    } else {
        var form = new formidable.IncomingForm();
        form.uploadDir = path.normalize(__dirname + '/../avatar');
        form.parse(req, function (err, fields, files) {
            var oldPath = files.avatar.path;
            var newPath = path.normalize(__dirname + '/../avatar') + '/' + req.session.username + '.jpg';
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    console.log(err);
                    res.send('失败');
                    return;
                } else {
                    //跳转到切得业务;
                    req.session.avatar = req.session.username + '.jpg';
                    console.log(req.session.avatar);
                    res.redirect('/cut');
                }
            })
        });
    }
};
//设置切图页面
exports.showCut = function (req, res) {
    res.render('cut', {
        avatar: req.session.avatar,
        "login": true,
        "username": req.session.username,
        "active": "index"
    });
};
//执行切图
exports.checkCut = function (req, res) {
    // 这个页面接收几个get请求参数
    // w/h/x/y
    var filename = req.session.avatar;
    var w = req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm('./avatar/' + filename)
        .crop(w, h, x, y)//宽、高、x、y
        .resize(100, 100, "!")
        .write('./avatar/' + filename, function (err) {
            if (err) {
                res.json({
                    "msgcode": -1,
                    "msg": "裁剪失败"
                });
                return;
            } else {
                //更改数据库当前用户的avatar
                db.update('users',
                    {"username": req.session.username},
                    {$set: {"avatar": req.session.avatar}},
                    function (err, result) {
                        if (err) {
                            res.json({
                                "msgcode": -3,
                                "msg": "服务器错误"
                            });
                            return;
                        } else {
                            res.json({
                                "msgcode": 1,
                                "msg": "图像修改成功",
                                "data": result
                            });
                            return;
                        }

                    });
            }
        });
};

//发表说说
exports.publishBlog = function (req, res, next) {
    if (req.session.login != "1") {
        res.send("您还没有登录呢!");
        return;
    }
    var username = req.session.username;
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到用户的填写信息
        var content = fields.content,
            time = Date.parse(new Date()) / 1000,
            formatTime = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
        db.insertOne("blogs", {
            "username": username,
            "content": content,
            "time": time,
            "formatTime":formatTime
        }, function (err, result) {
            if (err) {
                res.json({
                    "msgcode": -3,
                    "msg": "服务器错误"
                });
                return;
            } else {
                res.json({
                    "msgcode": 1,
                    "msg": "发表成功!"
                });
                return;
            }
        })
    });
};
