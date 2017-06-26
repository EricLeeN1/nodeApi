var fs = require('fs');
var filename = '2.txt';

// // 像一个指定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的内容会覆盖原有内容
// // fs.writeFile(filename, 'hello Eric', function(err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(arguments);
// //     }
// // })

// // fs.appendFile(filename, '-hello Eric', function(err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(arguments);
// //     }
// // })
// fs.exists(filename, function(isExists) {
//     console.log(isExists);
//     if (!isExists) {
//         fs.writeFile(filename, 'Eric', function(err) {
//             if (err) {
//                 console.log("出错了");
//             } else {
//                 console.log("创建新文件成功");
//             }
//         })
//     } else {
//         fs.appendFile(filename, '--Eric', function(err) {
//             if (err) {
//                 console.log("新内容追加失败");
//             } else {
//                 console.log("新内容追加成功");
//             }
//         })
//     }
// });



// 同步

if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, "Eric")
    console.log("新文件创建成功");
} else {
    fs.appendFileSync(filename, 'hello')
    console.log("新内容追加成功");
}