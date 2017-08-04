var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/test');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: {type: Date, default: Date.now}}],
    date: {type: Date, default: Date.now}
});
//发表评论
blogSchema.methods.pinglun = function (obj, callback) {
    this.comments.push(obj);
    this.save();
};
var Blog = mongoose.model('Blog', blogSchema);

// var blog = new Blog({
//     "title": "博客测试",
//     "author": "Eric",
//     "body": "博客内容"
// });

Blog.findOne({"title": "博客测试"}, function (err, blog) {
    if (!blog) {
        return;
    }
    blog.pinglun({"body": "再一个评论内容"}, function () {});
});