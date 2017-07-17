/**
 * Created by Eric on 2017/7/16.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
http.createServer(function(req, res) {
    // 的到用户的路径
    var pathname = url.parse(req.url).pathname;
    //真的读取这个文件
    if (pathname == '/') {
        pathname = 'index.html';
    }
    //拓展名
    var extname = path.extname(pathname);
    console.log(extname);
    fs.readFile('./static/' + pathname, function(err, data) {
        if (err) {
            // 如果子文件不存在，就应该用404返回
            // throw  err;
            fs.readFile('./static/404.html', function(err, data) {
                res.writeHead(404, { 'Content-type': 'text/html;charset=UTF8' });
                res.end(data);
            });
            return;
        };
        //MIME类型,就是
        //网页文件:  text/html
        //jpg文件: image/jpg
        var mime = getMime(extname);
        res.writeHead(200, { 'Content-type': mime });
        res.end(data);
    });
}).listen(3000, '127.0.0.1');

function getMime(extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
            break;
        case '.jpg' || '.jpeg':
            return 'image/jpeg';
            break;
        case '.png':
            return 'image/png';
            break;
        case '.gif':
            return 'image/gif';
            break;
        case '.css':
            return 'image/css';
            break;
        case '.js':
            return 'application/x-javascript';
            break;
        default:
            break;
    }
}