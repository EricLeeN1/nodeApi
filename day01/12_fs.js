/**
 * Created by Eric on 2017/7/16.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    //不处理小图标
    if (req.url == '/favicon.ico') {
        return;
    }
    // 遍历alum里面所有的文件夹/文件
    fs.readdir('./album/',function (err,files) {
        // files是一个文件（文件夹）名的数组
        var wenjianjia=[];
        (function iterator(i) {
            //遍历结束
            if (i==files.length) {
                console.log(wenjianjia);
                return;
            }
            fs.stat('./album/'+files[i],function (err,stats) {
                if (stats.isDirectory()) {
                    //如果是文件夹，放入数组
                    wenjianjia.push(files[i]);
                }
                iterator(i+1);
            })
            // 强行把stats变成同步
        })(0);
    });
    res.end();
});
server.listen(3000, '127.0.0.1');