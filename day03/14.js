var express = require('express');
// var jade = require('jade');

var app = express();
app.engine('jade', require('jade').__express)
    .set('view engine', 'jade')
    .get('/', function(req, res) {
        console.log(req.ip);
        res.render('xixi');
    })
    .listen(3000);