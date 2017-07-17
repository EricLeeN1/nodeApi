var foo = require('./test/foo');

console.log(foo.msg);
console.log(foo.info);
foo.showInfo();
//使用者用foo来接收exports对象;