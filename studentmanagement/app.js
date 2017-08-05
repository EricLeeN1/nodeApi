var express = require('express');
var app = express();
var router = require('./router/router.js');
var db = require('./models/db.js');



app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', router.showIndex);
app.get('/add', router.showAdd);
app.get('/doadd', router.doAdd);
app.get('/edit/:sid', router.edit);
app.get('/doedit/:sid', router.doEdit);
app.get('/remove/:sid', router.doRemove);

app.listen(3000);