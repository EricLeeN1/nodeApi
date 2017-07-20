/**
 * Created by Eric on 2017/7/18.
 */
var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    // 如果访问地址是这个，并且请求方式是post
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        // 设置文件上传存放的路径
        form.uploadDir = './uploads';
        //执行里面回调函数的时候表单已经全部接收完毕了
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw  err;
            }
            console.log(util.inspect({fields: fields, files: files}));
            // 执行改名
            var oldPath = _dirname + '/' + files.tupian.path;
            var newPath = _dirname + '/' +
            // 所有的文本域，单选框都在fields存放；
            // 所有的文件域都在files存放；
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
    }
    // show a file upload form
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end(
    //     '<form action="/upload" enctype="multipart/form-data" method="post">'+
    //     '<input type="text" name="title"/><br/>'+
    //     '<input type="file" name="upload" multiple="multiple"/><br/>'+
    //     '<input type="submit" value="Upload"/>'+
    //     '</form>'
    // );
});
server.listen(888, '127.0.0.1');