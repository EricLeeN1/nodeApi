//模块的缓存
// setInterval(() => {
//     var date = require('./index');
//     console.log("第一个定时器:" + date.getTime());
//     // 输出被缓存了
// }, 1000);

// var last;
// setInterval(() => {
//     var date = require('./index');
//     console.log(last === date);
//     last = date;
//     console.log("第二个定时器:" + date.getTime());
// }, 1000);

//如何实现
//如何删除缓存
setInterval(() => {
    Object.keys(require.cache).forEach(function(element) {
        delete require.cache[element];
    }, this);

    var date = require('./index');
    console.log("第一个定时器:" + date.getTime());
    // 输出被缓存了

    // console.log(require.cache);
}, 1000);