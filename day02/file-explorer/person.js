module.exports = Person;

function Person(name) {
    this.name = name;
};
Person.prototype.talk = function() {
    console.log('我叫:' + this.name);
}