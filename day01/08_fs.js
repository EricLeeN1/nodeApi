var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    // 不处理小图标  
    if (req.url == '/favicon.ico') {
        return;
    }
    var useid = parseInt(Math.random() * 89999) + 10000;
    console.log('欢迎' + useid + '开始执行');

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    // 两个参数，第一个参数是完整路径，当前目录写./
    // 第二个参数，就是回调函数，表示文件读取成功之后做的事情
    fs.readFile('./test/haha.html', { 'charset': 'utf-8' }, function(err, data) {
        if (err) {
            throw err;
        } else {
            console.log(useid + '文件读取完毕');
            res.end(data);
        }
    })
});
server.listen(3000, '127.0.0.1');