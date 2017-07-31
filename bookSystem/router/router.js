//这个页面不关系数据库，只关心对象
var Book = require('../schema/Book.js');

exports.showIndex = function (req, res, next) {
    Book.findAll({}, function (err, result) {
        res.render("index", {
            booklist: result
        });
    });
};
exports.addBook = function (req, res, next) {
    res.render('addbook');
};
exports.doAdd = function (req, res, next) {
    Book.create(req.query, function (err) {
        if (err) {
            console.log(err);
            res.send('添加失败');
        } else {
            res.send('添加成功');
        }
    });
};
//修改页面
exports.showEdit = function (req, res, next) {
    var id = req.query.id;
    Book.findBookById(id,function (err,result) {
        res.render('edit',{
            "name":result.name,
            "author":result.author,
            "price":result.price
        });
    });
};

exports.doUpdate = function (req, res, next) {
    var id = req.query._id,
        name = req.query.name,
        author = req.query.author,
        price = req.query.price;
    Book.updateBookInfo({"_id":id},{"name":name,"author":author,"price":price},{}, function (err,result) {
        if (err) {
            console.log(err);
            res.json({
                "msgcode":-3,
                "msg":"服务器错误"
            });
        } else {
            res.json({
                "msgcode":1,
                "msg":"修改成功",
                "data":result
            });
        }
    });
};