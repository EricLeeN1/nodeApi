var fs = require('fs');

fs.open('1.txt', 'r+', (err, fd) => {

    //当我们要对打开的文件进行写操作的时候，打开文件的模式应该是 读写
    if (err) {
        console.log(err);
    } else {
        //读取文件
        // fs.read(fd,buffer,offset,length,position,callback)
        // fd:通过open方法成功打开一个文件返回的编号
        // buffer:buffer对象
        // offset：新的内容添加到buffer中的起始位置
        //length:添加到buffer中的内容的长度
        // postion： 读取的文件中的起始位置
        // callback
        //    err
        //    buffer的长度
        //    buffer对象
        var bf1 = new Buffer('123');
        // fs.read(fd, bf1, 0, 3, 5, (err, length, buf) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(buf.toString());
        //         // console.log(length);
        //         // console.log(buf);
        //         // console.log(arguments)
        //     }
        // })
        fs.write(fd, '1234', 5, 'utf-8');
        fs.close(fd, () => {
            console.log("文件关闭了")
        });
    }
})