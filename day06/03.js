/**
 * Created by Administrator on 2017/7/27.
 */
var fs = require('fs');
var gm = require('gm');

gm('./1.jpg')
    .resize(100, 100)
    .write('./111.png', function (err) {
        console.log(err);
        if (!err) console.log('done');
    });