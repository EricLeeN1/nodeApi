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
    // 存储所有的文件夹
    var wenjiajia = [];
    fs.readdir('./album', function (err, files) {
        // files是文件名的个数组，表示./album这个文件夹中的所有东西
        //包括文件以及文件夹
        console.log(files);
        files.forEach(function (ele, index, arr) {
            fs.stat('./album/' + ele, function (err, stats) {
                //如果他是一个文件夹那么输出他；
                if (stats.isDirectory()) {
                    wenjiajia.push(ele);
                }
                console.log(wenjiajia);
            })
        });
    })
});
server.listen(3000, '127.0.0.1');