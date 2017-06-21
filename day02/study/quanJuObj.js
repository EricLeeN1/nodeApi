// 浏览器全局对象=>window
//node.js全局对象=>global

// 全局变量:
// 在最外层定义的变量
// 全局对象的属性
// 隐式定义的变量(未定义直接赋值的变量)
// 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险——


// __filename表示当前正在执行的脚本的文件名
// =>输出文件所在位置的绝对路径
// =>模块中，返回的值是模块文件的路径。


// __dirname 表示当前执行脚本所在的目录。

console.log(__filename);
console.log(__dirname);

// setTimeout(cb, ms)
//  全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。

function print() {
    console.log("Hello World!");
};
var t = setTimeout(print, 2000);
clearTimeout(t);

// setInterval(cb, ms) 
// 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

// var t2 = setInterval(print, 2000);
console.time('main');
console.log('hello Eric!', 1992);
console.trace();
console.info("执行完毕！");
console.timeEnd('main');

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");