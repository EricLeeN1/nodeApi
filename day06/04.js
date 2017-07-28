var fs =require('fs');
var gm = require('gm');

gm('./1.jpg')
    .crop(100,100,100,100)//宽、高、x、y
    .write('./2.jpg',function (err) {
        if (err) {
            console.log(err);
        }
    });
