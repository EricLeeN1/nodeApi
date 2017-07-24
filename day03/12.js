var expresss = require('express');
var app = expresss();
app.get('/', function(req, res) {
    console.log(req.query);
    res.send('');
});
app.listen(3000);