// var a = require('./module_a');
// console.log(a.name);
// console.log(a.data);
// console.log(a.getPrivate());
// var Person = require('./person');
// var leeyize = new Person('LeeYize');
// leeyize.talk();
// =>
// this is a
// lee
// this is a data
// 5
// 我叫:LeeYize
var fs = require('fs');
fs.readdir(process.cwd(), (err, files) => {
    console.log('   ');
    if (!files.length) {
        return console.log('   \033[31m 没有文件展示   \033[39m\n');
    }
    console.log('   选择你想看的文件或目录');

    function file(i) {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, (err, stat) => {
            if (stat.isDirectory()) {
                console.log('   ' + i + ' \033[36m' + filename + '/\033[39m');
            } else {
                console.log('   ' + i + ' \033[90m' + filename + '/\033[39m');
            }
            i++;
            if (i == file.length) {
                console.log('');
                process.stdout.write('   ' + i + ' \033[33m 输入你的选择: \033[39m');
                process.stdin.resume();
                process.stdin.setEncoding('utf8');
            } else {
                file(i);
            }
        });
    }
    file(0);
});


// // 重构
// var fs = require('fs'),
//     stdin = process.stdin,
//     stdout = process.stdout;

// // 找目录中的文件

// // 读取stdin函数
// function file(i) {
//     var filename = files[i];

//     fs.stat(__dirname + '/' + filename, (err, stat) => {
//         stats[i] = stat;
//         if (stat.isDirectory()) {
//             console.log('   ' + i + ' \033[36m' + filename + '/\033[39m');
//         } else {
//             console.log('   ' + i + ' \033[90m' + filename + '/\033[39m');
//         }
//         if (++i == files.length) {
//             read();
//         } else {
//             file(i);
//         }
//     });
//     var stats = [];
// };

// //当文件展示出来后，读取用户输入

// function read() {
//     console.log('');
//     stdout.write('  \033[33m 请输入你的选择： /\033[39m');
//     stdin.resume();
//     stdin.setEncoding('utf8');
//     stdin.on('data', option);
// };

// // 当用户输入选项时使用
// function option(data) {
//     var filename = files[Number(data)];
//     if (!filename) {
//         stdout.write('  \033[31m 输入你的选择: \033[39m');
//     } else {
//         stdin.pause();
//         if (stats[Number(data)].isDirectory()) {
//             fs.readdir(__dirname + '/' + filename, (err, files) => {
//                 console.log('   ');
//                 console.log('   (' + files.length + 'files)');
//                 files.forEach(function(file) {
//                     console.log('   --   ' + file);
//                 });
//                 console.log('');
//             });
//         } else {
//             fs.readFile(__dirname + '/' + filename, 'utf8', (err, data) => {
//                 console.log('');
//                 console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
//             });
//         }
//     }
// }