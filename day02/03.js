var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('/static./index.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html;charset=UTF8' });
        res.end(data);
    })
});
server.listen(80, '127.0.0.1');