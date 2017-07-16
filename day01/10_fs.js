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
    // stat检测状态
    fs.stat('./album/aaa',function (err,data) {
        //检测这个路径，是不是一个文件夹
        console.log(data.isDirectory());
        // true
        console.log(data.isFile());
        //false
    });
    fs.stat('./album/bbb.txt',function (err,data) {
        //检测这个路径，是不是一个文件夹
        console.log(data.isDirectory());
        // false
        console.log(data.isFile());
        // true
    })
});
server.listen(3000,'127.0.0.1');