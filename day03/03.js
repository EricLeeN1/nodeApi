var express = require('express');
var app = express();
var ejs = require('ejs');


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('haha', {
        "news": ["新闻1", "新闻2", "新闻3"]
    });
});
app.listen(3000);