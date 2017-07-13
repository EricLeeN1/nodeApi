/**
 * Created by Eric on 2017/7/13.
 */
var http = require('http');

var server=http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end('哈哈哈哈,这是第一个node页面');
});
server.listen(3000,'127.0.0.1');