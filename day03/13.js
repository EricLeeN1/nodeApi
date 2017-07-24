var expresss = require('express');
var bodyParser = require('body-parser');
var app = expresss();
// 模板引擎。
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('form');
});
// bodyParser API
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    res.end(JSON.stringify(req.body, null, 2));
});
app.listen(3000);