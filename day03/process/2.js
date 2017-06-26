//输入流，输出流

// process.stdin.rename();

// function log(data) {
//     process.stdout.write(data);
// }
// // process.stdout.write('hello');
// log('aaa');


//默认情况下，输入流是关闭的。要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
// process.stdin.on('data', function(chunk) {
//     console.log("用户输入了:" + chunk);
// });
var a, b;
process.stdout.write('请输入a的值');
process.stdin.on('data', function(chunk) {
    if (!a) {
        a = Number(chunk);
    } else {
        b = Number(chunk);

        process.stdout.write('结果是:' + (a + b));
    }
    // console.log("用户输入了:" + chunk);
});