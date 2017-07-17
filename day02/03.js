var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname.indexOf('.') == -1) {
        path += '/index.html';
    }
    console.log(pathname);
    var fileUrl = './' + path.normalize('./static/' + pathname);
    var extname = path.extname(fileUrl);
    console.log(fileUrl, path.normalize('./static/' + pathname));
    fs.readFile(fileUrl, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html;charset=UTF8' });
            res.end('404页面没有找到');
        }
        var mime = getMime(extname);
        res.writeHead(200, { 'Content-type': mime });
        res.end(data);
    });
});
server.listen(3000, '127.0.0.1');

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