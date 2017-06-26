// buf.write(要写入的字符串，从Buffer对象中的几位开始,写入的字符串的长度，写入的字符串的编码);
var str = "eric";
var bf = new Buffer(5);
console.log(new Buffer(str));

// bf.write(str, 1);
bf.write(str, 1, 3);
console.log(bf);