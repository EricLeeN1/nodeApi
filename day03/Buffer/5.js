// 类方法
//Buffer.isEncoding('encoding').判断是否支持encoding编码
// console.log(Buffer.isEncoding('utf-8')); //true
// console.log(Buffer.isEncoding('gbk')); //false
// console.log(Buffer.isEncoding('hex')); //true

// var arr = [1, 2, 3];
// var bf = new Buffer(10);
// //Buffer.isBuffer(obj).测试这个obj是否是一个buffer
// console.log(Buffer.isBuffer(arr)); //false
// console.log(Buffer.isBuffer(bf)); //true

// var str1 = "eric";
// console.log(str1.length);//4
// console.log(Buffer.byteLength(str1));//4

// var str2 = "艾瑞克";
// console.log(str2.length); //3
// console.log(Buffer.byteLength(str2)); //9
// console.log(Buffer.byteLength(str2, 'ascii')); //3

// var str1 = 'eric';
// var str2 = 'Lee';

// var list = [new Buffer(str1), new Buffer(str2)];
// console.log(list);
// var bf = Buffer.concat(list, 7);

// console.log(bf);

process.stdout.write('请输入内容:');
process.stdin.resume();
process.stdin.on('data', function(chunk) {
    console.log("输入的内容是" + chunk);
})