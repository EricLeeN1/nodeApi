/**
 * Created by Eric on 2017/7/20.
 */
var ejs = require('ejs');
var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    fs.readFile('./view/index.ejs', function (err, data) {
        //绑定模板
        if (err) {
            throw err;
        }
        console.log(data);
        var template = data.toString();
        var directory = {
            a: 7,
            news: [
                {title: 111, views: 10},
                {title: 222, views: 321},
                {title: 333, views: 41412}]
        };
        var html = ejs.render(template, directory);
        // console.log(html);
        res.writeHead(200, {'content-Type': 'text/html;charset=UTF8'});
        res.end(html);
    });
}).listen(888, '127.0.0.1');
