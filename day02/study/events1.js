var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
// event.on('some_event', function() {
//     console.log('some_event事件触发');
// });
// setTimeout(function() {
//     event.emit('some_event');
// }, 1000);



event.on('hello', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
event.on('hello', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
event.on('hello', function(arg1, arg2) {
    console.log('listener3', arg1, arg2);
});
event.emit('hello', '参数1:', '参数2:');