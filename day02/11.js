/**
 * Created by Eric on 2017/7/18.
 */
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    // 如果访问地址是这个，并且请求方式是post
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var alldata = '';
        req.addListener('data', function(chunk) {
            alldata += chunk;
            console.log(alldata.toString());
        });
        req.addListener('end', function() {
            var datastring = alldata.toString();
            res.end('success');
            //将string转为一个对象
            var dataObj = querystring.parse(datastring);
            console.log(dataObj.name);
            console.log(dataObj);
            console.log(dataObj.sex);
        });
    }
});
server.listen(888, '127.0.0.1');