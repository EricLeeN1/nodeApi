var http = require('http'),
    url = require('url'),
    util = require('util');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });

    //解析URL参数

    var params = url.parse(req.url, true).query;
    console.log(params);
    res.write("网站名:" + params.name);
    res.write("\n");
    res.write("网站url:" + params.url);
    res.end();
    // res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);