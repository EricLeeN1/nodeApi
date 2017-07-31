//引包
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27018/mongoose');
//创建了一个模型。猫的模型。所有的猫，都有名字，是字符串。"类"
var Cat = mongoose.model('Cat',{
    name:String
});
//实例化一只猫
var kitty = new Cat({name:"kitty"});
// 调用这只猫的save方法，保存这只猫
kitty.save(function (err) {
   console.log('喵');
});
var tom = new Cat({name:"Tom"})
tom.save(function () {
    console.log("Jerry");
});