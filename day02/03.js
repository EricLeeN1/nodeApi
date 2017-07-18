var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if (pathname.indexOf('.') == -1) {
        pathname += 'index.html';
    }
    console.log(pathname);
    var fileUrl = './' + path.normalize('./static/' + pathname);
    var extname = path.extname(pathname);
    console.log(fileUrl, extname);
    fs.readFile(fileUrl, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html;charset=UTF8' });
            res.end('404页面没有找到');
        }
        getMime(extname, function(mime) {
            res.writeHead(200, { 'Content-type': mime });
            res.end(data);
        });
    });
});
server.listen(3000, '127.0.0.1');

function getMime(extname, callback) {
    fs.readFile(__dirname + '/mime.json', function(err, data) {
        if (err) {
            throw err;
            return;
        } //转成json
        var mineJson = JSON.parse(data) || 'text/plain';
        // console.log(mineJson[extname]);
        var mime = mineJson[extname] || 'text/plain';
        callback(mime);
    });
}