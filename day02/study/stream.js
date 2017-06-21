// stream四种流类型
// 1.Readable - 可读操作。
// 2.Writable - 可写操作。
// 3.Duplex - 可读可写操作.
// 4.Transform - 操作被写入数据，然后读出结果。
// 所有stream对象都是EventEmitter的实例
// 事件
// data-当有数据可读时触发
// end-没有更多的数据可读时触发
// error-在接收和写入过程中发生错误时触发
// finish-所有数据已被写入到底层系统时触发

var fs = require("fs");
// var data = '';


// 可读流
// var readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF8');

// readerStream.on('data', (chunk) => {
//     data += chunk;
// });
// readerStream.on('end', () => {
//     console.log(data)
// });
// readerStream.on('error', (error) => {
//     console.log(error.stack);
// });
// console.log("程序执行完毕！");





//写入流
// var data = '我想说:I love You!';

// var writeStream = fs.createWriteStream('outPut.txt');

// writeStream.write(data, 'UTF8');

// writeStream.end();

// writeStream.on('finish', () => {
//     console.log("写入完成！");
// });
// writeStream.on('error', (error) => {
//     console.log(err.stack);
// });

// console.log("程序执行完毕");




//管道流
// var readerSteam = fs.createReadStream('input.txt');
// var writeStream = fs.createWriteStream('output.txt');

// readerSteam.pipe(writeStream);
// console.log("程序执行完毕");

//链式流
var zlib = require('zlib');

//压缩文件
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log('文件压缩完成');

//解压文件
//压缩文件
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input1.txt'));
// console.log('文件压缩完成');