// process：是一个全局对象


// console.log(process);
// console.log(global.process);

// console.log(process.env);
// console.log(process.argv);

// console.log(process.env);

console.log(process.pid);

console.log(process.title);

setInterval(() => {
    process.exit();
}, 3000);