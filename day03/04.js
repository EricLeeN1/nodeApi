var express = require('express');
var app = express();

app.get('/AAB', function(req, res) {
    res.send('你好');
});
app.get('/student/:id', function(req, res) {
    // var id = req.params['id'];
    var id = req.params.id;
    var reg = /^[\d]{6}$/;
    if (reg.test(id)) {
        res.send(id);
    } else {
        res.send('请检查格式');
    }
});
app.listen(3000);