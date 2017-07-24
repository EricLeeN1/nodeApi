exports.showIndex = function(req, res) {
    res.render('index', { news: [1, 2, 3] });
}
exports.showAlbum = function(req, res) {
    res.send('相册' + req.params.albumName);
}