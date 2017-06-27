/**
 * Created by Eric on 2017/6/26.
 */
/*
* 搭建一个http服务器，用于处理用户发送的http请求
* 需要使用node 提供的一个模块 http
* */
//加载一个http模块
var  http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();
server.on('error',function (err) {
    console.log(err);
});
server.on('listening',function () {
    console.log('listening');
});
server.on('request',function (req,res) {
   console.log('有客户来请求了');
   // console.log(req);
    res.setHeader('Eric','Lee');
    res.writeHead(200,'eric',{
        // 'content-type':'text/plain'
        'content-type':'text/html;charset=utf-8'
    });
    res.write('<h1>hello</h1>','utf-8');
    res.end();
});
server.listen(8080,'localhost');
// console.log(server.address());