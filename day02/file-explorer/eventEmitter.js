// var EventEmitter = require('events').EventEmitter,
//     a = new EventEmitter;
// a.on('event', function() {
//     console.log('event called');
// });
// a.emit('event');
//执行完成后'event called'


// var EventEmitter = process.EventEmitter,
//     MyClass = function() {};
// MyClass.prototype._proto_ = EventEmitter.prototype;
// var a = new MyClass();
// a.on('event', function() {
//     console.log("执行成功了");
// });
// e.emit('event');

//报错:a.on is not a function;

http.Server((req, res) => {
    var buf = '';
    req.on('data', (data) => {
        buf += data;
    });
    req.on('end', () => {
        console.log("数据接收完毕");
    })
});