console.log('this is a');
exports.name = "lee";
exports.data = 'this is a data';
var privateVariable = 5;
exports.getPrivate = function() {
    return privateVariable;
}