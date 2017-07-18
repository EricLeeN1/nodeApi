/**
 * Created by Eric on 2017/7/18.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    // 如果访问地址是这个，并且请求方式是post
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var alldata = '';
        req.addListener('data',function (chunk) {
            alldata +=chunk;
            console.log(alldata.toString());
        })
    }
});
server.listen(80, '127.0.0.1');