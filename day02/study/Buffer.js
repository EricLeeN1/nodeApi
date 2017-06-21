//缓冲区

// 1.创建长度为10字节的Buffer实例
var buf = new Buffer(20),
    len = buf.write("www.baidu.com", 0, 20, 'utf-8');
console.log("写入字节数长度:" + len);

// 2.通过给定的数组创建Buffer实例
// var buf = new Buffer([10,20,30,40,50]);

// 3.通过一个字符串来创建Buffer实例
// var buf = new Buffer("www.baidu.com", 'utf-8');
// utf-8是默认编码方式

// 写入缓存区==>返回实际写入的大小

// buf.write(string, offset, length, encoding)==>返回实际写入的大小，buffer空间不足的话，只写入部分。
// string - 写入缓存区的字符串
// offset - 缓冲区开始写入的索引值， 默认为0
// length - 写入的字节数， 默认为Buffer.length
// encoding - 使用的编码.默认 'utf-8'

//从缓冲区读取数据==>解码缓冲区数据并使用指定的编码返回字符串。

// buf.toString([encoding, [start, end]]);
// encoding-使用的编码.默认为utf-8.
// strat- 指定开始读取的索引位置，默认为0
// end-结束位置，默认为缓冲区的末尾
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 10));
console.log(buf.toString('utf8', 0, 8));
console.log(buf.toString(undefined, 0, 8));

//将Buffer转换为JSON

// buf.toJSON();==>返回JSON对象
var json = buf.toJSON(buf);
console.log(json);

// concat合并
var buf1 = new Buffer("I love you!")
var buf2 = new Buffer("Me too!");
var buf3 = Buffer.concat([buf1, buf2]);
console.log("buf3:" + buf3.toString());

// compare比较==>返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
// buf.compare(otherBuffer);
var result = buf1.compare(buf3);
if (result < 0) {
    console.log(buf1 + "在" + buf3 + "之前");
} else if (result == 0) {
    console.log(buf1 + "与" + buf3 + "相同");
} else {
    console.log(buf1 + "在" + buf3 + "之后");
}

//copy==>没有返回值
// buf.copy(targetBuffer(要拷贝的Buffer对象), argetStart(数字， 可选， 初始: 0), sourceStart(数字， 可选， 初始: 0), sourceEnd(数字， 可选， 初始: 0))
var buf4 = new Buffer(5);
buf3.copy(buf4);
console.log("buf4内容是:" + buf4.toString());

// slice == > 返回一个新的缓冲区， 跟旧缓冲区指向同一块内存， 但是从start 到 end 的位置剪切。
// buf.slice(start(数字，可选，默认：0), end(数字，可选，默认:buffer.length));

var buf5 = buf3.slice(0, 8);
console.log("buf5内容是:" + buf5.toString());

//length==>Buffer对象所占据的内存长度
// buf.length;
console.log("buf5长度是:" + buf5.length);