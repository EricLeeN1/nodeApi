var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        //显示首页
        fs.readFile('./huaban.html', function (err, data) {
            res.writeHead(200, {"content-type": "text/html;charset=utf-8"});
            res.end(data);
        })
    }
});
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('一个客户连接了');
    socket.on("draw", function (msg) {
        io.emit("huida",msg);
    });
});
server.listen(3000, "127.0.0.1");