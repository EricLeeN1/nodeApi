var fs = require('fs');

// fs.mkdir(path,[mode],callback)
// fs.mkdir('./1', function(err) {
//     console.log(arguments);
// });
// fs.rmdir('./1', function(err) {
//     console.log(arguments);
// });
fs.readdir('./', function(err, fileList) {
    console.log(fileList);
    fileList.forEach(function(element) {
        fs.stat(element, function(err, info) {
            switch (info.mode) {
                case 16822:
                    console.log('[文件夹]' + element);
                    break;
                case 33206:
                    console.log('[文件]' + element);
                    break;
                default:
                    console.log('[其他类型]' + element);
                    break;
            }
            // console.log(arguments);
        });
    }, this);
});