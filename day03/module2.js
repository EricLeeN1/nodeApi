// 在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能够直接的访问
// 如果我们想一个模块能够访问另外一个模块中定义的变量，可以:
// 1.把变量作为global对象的属性,但是这样的做法是不推荐的
// 2.使用模块对象 module
// module：保存提供和当前模块有关的一些信息
// 在这个module对象，有一个子对象：exports对象，
// 我们可以通过这个对象把一个模块中的局部变量对象进行提供访问

var a = 100;
// global.a = 100;
// module.exports.a = a;
//在模块作用域内还有一个内置的模块对象：exports,它其实就是module.exports
console.log(module.exports === exports);
exports.a = a;
// module.exports = [1, 2, 3];
// //此时，exports和module.exports的指向关系已经断开了.不推荐这样做
// // exports.a = 200;