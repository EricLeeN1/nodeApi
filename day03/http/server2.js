var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('request', function(req, res) {
    //req.url访问路径
    // console.log(req.url);

    var urlStr = url.parse(req.url);
    // console.log(urlStr);
    switch (urlStr.pathname) {
        case '/':
            //首页
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心</h1>');
            break;
        case '/user':
            //用户首页
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('<h1>用户主页</h1>');
            break;
        default:
            //处理其他情况
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('<h1>页面can\'t found</h1>');
            break;
    }
});
server.listen(8080, 'localhost');