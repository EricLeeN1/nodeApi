/**
 * Created by Eric on 2017/7/13.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url == '/fang') {
        fs.readFile('./test.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
            res.end(data);
        });
    } else if (req.url == '/yuan') {
        fs.readFile('./haha.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
            res.end(data);
        });
    } else if (req.url == '/1.jpg') {
        fs.readFile('./1.jpg', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(data);
        });
    } else if (req.url == '/bbbb.css') {
        fs.readFile('./css.css', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.end('没有这个页面呦！');
    }



});
server.listen(3000, '127.0.0.1');