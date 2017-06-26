var fs = require('fs');
var filedir = './Eric/js';
fs.watch(filedir, (ev, file) => {
    // console.log(ev + '/' + file);
    // 这里不需要判断file是否有内容
    // switch (ev) {
    //   case 'rename':

    //     break;

    //   default:
    //     break;
    // }
    // 只要有一个文件发生了变化，我们就需要对这个文件夹下的所有文件进行读取，然后合并
    fs.readdir(filedir, function(err, datalist) {
        if (err) {
            console.log(err);
        } else {
            var arr = [];
            datalist.forEach(function(element) {
                if (element) {
                    var info = fs.statSync(filedir + '/' + element);
                    if (info.mode == 33206) {
                        arr.push(filedir + '/' + element);
                    }
                }
            });
            // console.log(arr);
            //读取数组中的文件内容，并合并
            var content = '';
            arr.forEach(function(element) {
                var c = fs.readFileSync(element);
                content += c.toString() + '\n';
            });
            console.log(content);
            fs.writeFile('./Eric/index.js', content);
        }

    })
})