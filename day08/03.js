var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/test');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});
var Schema = mongoose.Schema;
var animalSchema = new Schema({
    "name": String,
    "type": String
});
animalSchema.methods.findType = function (callback) {
    return this.model('Animal').find({"type":this.type},callback);
};
var Animal = mongoose.model('Animal', animalSchema);

// Animal.create({"name": "ahuang", "type": "dog"});
// Animal.create({"name": "xiaohei", "type": "dog"});
// Animal.create({"name": "mimi", "type": "cat"});
// Animal.create({"name": "miaomiao", "type": "cat"});
// blog.save();
Animal.findOne({"name":"ahuang"},function (err,result) {
    console.log(result);
    var dog = result;
    dog.findType(function (err,result1){
        console.log(result1);
    })
});