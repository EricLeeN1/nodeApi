/**
 * Created by Eric on 2017/7/20.
 */
var ejs = require('ejs');
var data = {
    a: 6
};
var string = '好高兴啊，今天我买了iphone<%= a %>s';
var html = ejs.render(string, data);
console.log(html);