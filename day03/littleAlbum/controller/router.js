var file = require('../models/file.js');
exports.showIndex = function (req, res,next) {
    // res.render('index', {
    //     "albums": file.getAllAlbums()
    // });
    // 这就是node的编程思维，就是所有的东西都是异步的
    // 所以，内层函数，不是return回来东西，而是调用高层函数提供的
    // 回调函数。把数据当做回调函数的参数来用
    file.getAllAlbums(function (err, allAlbums) {
        if (err) {
            next();
            return;
        }
        res.render('index', {
            "albums": allAlbums
        });
    });
};
// 相册页
exports.showAlbum = function (req, res,next) {
    // 遍历相册中的所有图片
    var albumName = req.params.albumName;
    //具体业务交给module
    file.getAllImagesByAlbumName(albumName, function (err, imagesArray) {
        if (err) {
            next();//交给下面适合他的中间件
            return;
        }
        res.render('album', {
            "albumName": albumName,
            "images": imagesArray
        });
    });
};