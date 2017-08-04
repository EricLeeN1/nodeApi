var mongoose = require('mongoose');
// 创建一个数据库连接
mongoose.connect('mongodb://localhost:27018/test');
// 创建一个Cat模型，语法mongoose.model(模型名字,Schema);
//省略了一步，就是schema 是通过new mongoose.Schema({})创建的
var Cat = mongoose.model('Cat', {name: String,age:Number});
//
// var kitty = new Cat({name:'123'});
//
// kitty.save(function (err) {
//     if (err) {
//         console.log(err);
//     };
//     console.log('MEO');
// });

Cat.find({"name":"123"},function (err,result) {
    console.log(result);
    var cat1 = result[0];
    //cat1 这个变量是一个Cat的实力，
    //因为他是从 Cat集合中find出来的，所以find出来后仍然是cat的一个实例；
    cat1.age=8;
    console.log(cat1);
    cat1.save();
});
