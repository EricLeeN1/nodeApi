var bf = new Buffer('Eric');
console.log(bf.toString());
console.log(bf.toString('utf-8', 1, 3));

var bf2 = new Buffer('呵呵哒');
console.log(bf2);
console.log(bf2.toString('utf-8', 1));
console.log(bf.toJSON());