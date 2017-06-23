// 'use strict';
const path = require('path');
const temp = path.join(__dirname, '../day02/study/input');

console.log(path.basename(temp));
//获取文件名、
console.log(path.basename(temp, '.txt'));
//获取名不带扩展名

console.log(path.delimiter);
//获取不用操作系统中默认的路径分隔符
// window==>；linux==>:


console.log(process.env.PATH.split(path.delimiter));
//获取环境变量、

console.log(path.dirname(temp));
//获取目录名、

console.log(path.extname(temp));
//获取目录中扩展名，包括

//
var obj = path.parse(temp);
console.log(obj);
console.log(path.format(obj));