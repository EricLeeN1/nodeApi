var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();
var querystring = require('querystring');

server.on('request', function(req, res) {
    var urlStr = url.parse(req.url);
    var htmlDir = __dirname + '/html/';
    switch (urlStr.pathname) {
        case '/':
            //首页
            sentData(htmlDir + 'index.html', req, res);
            break;
        case '/user':
            //用户首页
            sentData(htmlDir + 'user.html', req, res);
            break;
        case '/login':
            //用户首页
            sentData(htmlDir + 'login.html', req, res);
            break;
        case '/login/check':
            //用户首页
            // console.log(req.method);
            // console.log(urlStr);
            // console.log(querystring.parse(urlStr.query));
            // sentData(htmlDir + 'login.html', req, res);
            if (req.method.toUpperCase() == 'POST') {
                var str = '';
                req.on('data', function(chunk) {
                    str += chunk;
                });
                req.on('end', function() {
                    console.log(str);
                    console.log(querystring.parse(str));
                })
            } else {

            }
            break;
        default:
            //处理其他情况
            // res.writeHead(404, {
            //     'content-type': 'text/html;charset=utf-8'
            // });
            // res.end('<h1>页面can\'t found</h1>');

            break;
    }
});

function sentData(file, req, res) {
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('<h1>页面can\'t found</h1>');
        } else {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end(data);

        }
    });
}
server.listen(8080, 'localhost');