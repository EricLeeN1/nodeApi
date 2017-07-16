var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    // url.parse可以将一个完整的URL地址，分为很多部分:
    //host/port/pathname/path/search/query
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    // ->如果第二个参数为true，那么就可以将所有的查询变为对象
    // 就可以直接打点得到参数
    var hash = url.parse(req.url).hash;
    var age = query.age;
    console.log(pathname, query, hash, age);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>你好</h1>');
    res.end();
}).listen(3000, '127.0.0.1')