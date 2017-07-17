var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html;charset=UTF8' });

    //每次接受请求之后做的事情  
    res.end('成功了');
});
server.listen(80, '127.0.0.1');