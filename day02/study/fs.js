var fs = require('fs');
var buf = new Buffer(1024);

console.log("准备打开文件");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功!");
//     console.log("截取14字节后的文件内容！");
//     //截取文件
//     fs.ftruncate(fd, 14, function(err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("文件截取成功。");
//         console.log("读取相同的文件");
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//             if (err) {
//                 console.log(err);
//             }

//             //仅输出读取的字节
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }
//             //关闭文件
//             fs.close(fd, function(err) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log("文件关闭成功！");
//             });
//         });
//     })
// });

//删除文件
// fs.unlink('input.txt', function(err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("文件删除成功！");
//     })
//创建目录
// console.log("创建目录/input/test")
// fs.mkdir("input/test", function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("目录创建成功！");
// });
//读取目录
console.log("查看目录/input目录");
// fs.readdir('/develop/nodeDemo/day02/study', function(err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach(function(file) {
//         console.log(file);
//     });
// })

//删除目录
fs.rmdir('input/test', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("读取目录");
    fs.readdir('/develop/nodeDemo/day02/study', function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            console.log(file);
        });
    })
})