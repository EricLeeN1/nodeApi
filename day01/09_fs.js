/**
 * Created by Eric on 2017/7/16.
 */
/**
 * Created by Eric on 2017/7/16.
 */
var http =require('http');
var fs =require('fs');

var server = http.createServer(function (req,res) {
    //不处理小图标
    if (req.url=='/favicon.ico') {
        return;
    }
    //创建文件夹
    fs.mkdir('./album/aaa');
    //移除文件夹
    // fs.rmdir('./album/aaa');
});
server.listen(3000,'127.0.0.1');