var fs = require('fs');

//阻塞式
// var data = fs.readFileSync('package.json');
// console.log(data.toString());
//==>json->结束


//非阻塞式
fs.readFile('package.json', (err, data) => {
    if (err) {
        return console.log(err);
    };
    console.log(data.toString());
})

console.log("程序执行结束");
//==>结束->json