var express = require('express');
var app = express();
//使用中间件
app.get('/11', function(req, res) {
    res.send('你好');
});
app.use(express.static('./public'));
app.listen(3000);