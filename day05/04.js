/**
 * Created by Eric on 2017/7/26.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/',function (req,res) {
    res.cookie('xihao', 'jingmin', { maxAge: 900000, httpOnly: true });
    res.send('111');
});
app.listen(3000);