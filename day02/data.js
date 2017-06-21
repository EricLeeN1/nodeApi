//模块的缓存
setInterval(() => {
    var date = require('./index');
    console.log(date.getTime());
    // 输出被缓存了
}, 1000);