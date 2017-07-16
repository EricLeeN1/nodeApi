var http = require('http');
var url = require('url');
var server = http.server(function(req, res) {
    //得到url
    var userurl = req.url();

    //正则表达式判断此时的地址
});
server.listen(3000, '127.0.0.1');