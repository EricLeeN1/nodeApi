var fs = require('fs');
var stream = fs.createReadStream('my-file.txt');

var files = fs.readdirSync(process.cwd());
files.forEach(function(file) {
    //监听.css后缀的文件
    if (/\.css/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, function() {
            console.log('-' + file + '  changed!');
        });
    }
});
console.log(files);