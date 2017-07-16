var http = require('http');
http.createServer(function(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>你好</h1>');
    res.end();
}).listen(3000, '127.0.0.1')