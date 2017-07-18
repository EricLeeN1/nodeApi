console.log('哈哈哈');
var c = require('./c.js');
var fs = require('fs');

fs.readFile(__dirname + '/1.txt', function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
})