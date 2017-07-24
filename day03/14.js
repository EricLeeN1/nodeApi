var express = require('express');
// var jade = require('jade');

var app = express();
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.render('xixi');
});
app.listen(3000);