/**
 * Created by Administrator on 2017/7/27.
 */
var fs = require('fs');
var gm = require('gm');

gm('./1.jpg')
    .resize(50,50,"!")
    .write('./111.jpg',function (err) {
        if (err) {
            console.log(err);
        }
    });