var http = require('http');
var url = require('url');
// var querystring = require('quertstring');已废弃貌似
http.createServer(function(req, res) {
    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>你好</h1>');
    res.end('数据库收到了表单请求' + name + age + sex);
}).listen(3000, '127.0.0.1')