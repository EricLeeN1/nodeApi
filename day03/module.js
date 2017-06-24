// 一个文件就是一个模块
// 每个模块都有自己的作用域
// 我们使用var来声明的一个变量，他并不是全局的，而是属于当前模块下
var a = 100
console.log(a)
global.a = 10

console.log(a)
console.log(global.a);

// filename:当前文件被解析过后的绝对路径、

console.log(__filename);

// 模块加载系统
// require('模块')

// require('./path');

// 模块加载机制
// 路径
//     绝对路径:F:\develop\nodeDemo\day03\module.js
//     相对路径:./path.js
// require('F:\\develop\\nodeDemo\\day03\\module.js');
// require('path.js');  将会加载node中的核心模块，或者是node_modules文件下的模块

//1.首先按照加载的模块的文件名称进行查找
//2.如果没有找到，则会模块文件名称后加.js的后缀，进行查找
//3.如果没有找到，则会在文件名称后面加上.json的后缀，进行查找
//4.如果没有找到，则会在文件名称后面加上.node的后缀，进行查找

//文件名称 =>.js =>.json =>.node
//
require('./path');