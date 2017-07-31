var express = require('express');
var app = express();
var router = require('./router/router.js');
app.set('view engine','ejs');
app.use(express.static('./public'));
app.get('/',router.showIndex);
app.get('/addbook',router.addBook);
app.get('/add',router.doAdd);
app.get('/update',router.doUpdate);
app.get('/edit',router.showEdit);




app.listen(3000);