//获取当前脚本所在路径
// console.log(_dirname);
const fs = require('fs');
//所有文件操作都必须是绝对路径或(物理路径)
fs.readFile(__dirname + '/../Api.md', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    //自觉数组
})