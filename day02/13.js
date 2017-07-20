/**
 * Created by Eric on 2017/7/18.
 */
var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');

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
            // 时间
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.tupian.name);
            console.log(__dirname);
            var oldPath = __dirname + '/' + files.tupian.path;
            // 新文件由三个部分组成  时间戳+随机数+扩展名
            var newPath = __dirname + '/uploads/' + ttt + ran + extname;
            // 所有的文本域，单选框都在fields存放；
            // 所有的文件域都在files存放；
            //改名
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    throw Error('改名失败');
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.write('received upload:\n\n');
                res.end(util.inspect({fields: fields, files: files}));
            });
        });
    } else if (req.url == '/') {
        fs.readFile('./11.html', function (err, data) {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('404');
    }
});
server.listen(888, '192.168.1.101');