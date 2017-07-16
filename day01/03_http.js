// 这个案例简单讲解HTTP模块
var http = require('http');
// 创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req, res) {
    // req参数表示请求，res表示响应
    // 设置个响应头。
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    });
    // res.setHeader('Content-Type', 'text/plain');
    res.write('<h1>我是主标题</h1>');
    res.write('<h2>我是主标题</h2>');
    res.write('<h2>我是主标题</h3>');
    res.write('<h4>我是主标题</h4>');
    console.log('服务器接收到了请求' + req.url);
    res.end('<h1>主标题</h1>');
    // ->每一次必须使用res.end();end里面必须写成字符串格式或者buffer格式
});
server.listen(3000, '127.0.0.1');
// server.listen(3000, 'localhost');