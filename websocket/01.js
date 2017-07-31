var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        //显示首页
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, {"content-type": "text/html;charset=utf-8"});
            res.end(data);
        })
    }
});
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('一个客户连接了');
    socket.on("hello", function (msg) {
        console.log(msg);
        // socket.emit("hi","我吃了");
        io.emit("hi",msg);
    });
});
server.listen(3000, "127.0.0.1");