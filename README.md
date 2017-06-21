# NPM常用命令行命令与node部分模块Api
## 1.NPM--常用命令行命令
	npm install 安装
	npm uninstall 卸载
	npm help查看所有命令行
	npm help <command>查看某条命令的详细帮助
	npm update <package>更新当前目录下node_modules子目录里边的对应模块
	npm update <package> -g全局更新对应模块
	npm cache clear 清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人
	npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码
## 2.node--REPL
	--(读取，执行，打印，循环)
	命令行输入node然后enter进入环境
	Ctrl+c两次退出==Ctrl+d==.exit==process.exit()退出环境
	.help--列出使用命令
	tab--列出当前命令
	.break--退出多行表达式
	.clear--退出多行表达式
	.sava filename--保存当前绘画到指定文件
	.load filename--载入当前绘画的文件内容
## 3.http--模块
	引入http模块
	var http = require('http');
	使用 http.createServer() 方法创建服务器
	http.createServer(function (request, response) {
	发送 HTTP 头部 
	HTTP 状态值: 200 : OK
	内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	发送响应数据 "Hello World"
	response.end('Hello World\n');
	.listen(8888);
	listen();监听设置的端口
## 4.events模块
	引入envents模块
	var events = require('events');
	创建eventEmitter对象（events模块只有这一个对象）
	var eventEmitter = new event.eventEmitter();==>核心就是事件触发与事件监听器功能的封装
	绑定事件及事件的处理程序
	eventEmitter.on('eventName', eventHandler);
	触发事件
	eventEmitter.emit('eventName');
	详细属性与方法
	on 函数用于绑定事件函数
	emit属性用用于触发一个事件。
	1.addListenner(event,callback);
		为指定事件添加一个监听器到监听器数组的尾部。
	2.on(event,callback)
		为指定事件注册一个监听器，接收一个字符串event和一个回调函数！
	3.once(event,callback)
		为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻接触该监听器。
	4.removeListener(event,callback);
		移除指定事件的某个监视器，必须是已经注册过的！
	5.removeAllListeners([event])
		移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器。
	6.setMaxListeners(n)
		默认如果添加的监听器超过10个就会输出警告信息。此函数用于提高边听器的默认限制的数量！
	7.listeners(event);
		返回指定事件的监听器数组
	8.emit(event,[arg1],[arg2],[...])
		按参数的顺序执行每个监听器，如果事件有注册监听返回true,否则返回false
## 5.Buffer(缓冲区)
	--出现原因：js语言只有字符串数据类型，没有二进制数据类型。Buffer用来创建一个专门存储二进制数据的缓存区。node自带
	1.创建Buffer
		var buf = new Buffer(10);
	2.写入缓存区==>返回实际写入的大小		
		buf.write(string, offset, length, encoding)==>返回实际写入的大小，buffer空间不足的话，只写入部分。
			string - 写入缓存区的字符串
			offset - 缓冲区开始写入的索引值， 默认为0
			length - 写入的字节数， 默认为Buffer.length
			encoding - 使用的编码.默认 'utf-8'
	3.从缓冲区读取数据==>解码缓冲区数据并使用指定的编码返回字符串。
		buf.toString([encoding, [start, end]]);
			encoding-使用的编码.默认为utf-8.
			strat- 指定开始读取的索引位置，默认为0
			end-结束位置，默认为缓冲区的末尾
	4.将Buffer转换为JSON
		buf.toJSON();==>返回JSON对象
	5.缓冲区合并
		Buffer.concat(list[totalLength])
		list-用于合并的BUFF对象数组列表
		totalLength指定合并后Buffer对象的总长度！
	6.compare比较==>返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
		buf.compare(otherBuffer);
	7.copy==>没有返回值
		buf.copy(targetBuffer(要拷贝的Buffer对象), argetStart(数字， 可选， 初始: 0), sourceStart(数字， 可选， 初始: 0), sourceEnd(数字， 可选， 初始: 0))
	8.slice == > 返回一个新的缓冲区， 跟旧缓冲区指向同一块内存， 但是从start 到 end 的位置剪切。
		buf.slice(start(数字，可选，默认：0), end(数字，可选，默认:buffer.length));
	9.length==>返回Buffer对象所占据的内存长度
		buf.length
## 6.stream(流)
	stream四种流类型
		1.Readable - 可读操作。
		2.Writable - 可写操作。
		3.Duplex - 可读可写操作.
		4.Transform - 操作被写入数据，然后读出结果。
	所有stream对象都是EventEmitter的实例
	常用事件
		data-当有数据可读时触发
		end-没有更多的数据可读时触发
		error-在接收和写入过程中发生错误时触发
		finish-所有数据已被写入到底层系统时触发
	1.创建可读流
		fs.createReadStream(file);==>创建可读流
		readerStream.setEncoding('UTF8');==>设置编码
		readerStream.on('data'/'end'/'error',function(){});==>处理流事件
	2.写入流
		fs.createWriteStream(file);==>创建写入流
		writerStream.write(data,'UTF8');==>设置写入数据编码
		writerStream.end();==>标记文件末尾
		readerStream.on('finish'/'data'/'end'/'error',function(){});==>处理流事件
	3.管道流
		.pipe实现大文件像注水一样慢慢复制过程
	4.链式流
		.pipe()
		.pipe()
## 7.node模块系统
	require()用于从外部获取一个模块的接口，即所获取模块的exports对象；
	exports模块公开的接口==>外部引用模块时，借口对象要输出的是Hello对象本身，而不是exports
## 8.node函数
## 9.路由
## 10.全局对象
	浏览器全局对象=>window
	node.js全局对象=>global
	__filename
		当前正在执行的脚本的文件名
		输出文件所在位置的绝对路径。如果是模块中，返回的值是模块文件的路径
	__dirname 
		表示当前执行脚本所在的目录
	setTimeout(cb, ms)
		全局函数=>
		在指定的毫秒(ms)数后执行指定函数(cb)。
		只执行一次指定函数
	setInterval(cb, ms) 
		全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
		可以使用 clearInterval(t) 函数来清除定时器。
		setInterval() 方法会不停地调用函数。
	clearInterval() 被调用或窗口被关闭。
	console方法
		.log()=>输出字符以换行符结束
		.info()=>加蓝色惊叹号
		.error()=>加红色叉子
		.warn()=>黄色惊叹号
		.dir()=>对一个对象进行检查，并以易于阅读和打印的格式显示
		.time()=>输出时间，表示计时开始
		.timeEnd()=>结束时间，表示计时结束
		.trace()=>当前执行的代码在堆栈中的调用路径，
		.assert()=>用于判断某个表达式或者变量是否为真，第一个参数是表达式，
		第二个参数是字符串。只有当第一个参数false，才输出第二个。否则不会有结果！
	process是一个全局变量，即global对象的属性
		.exit
		当进程准备退出时触发
		beforeExit
		当 node 清空事件循环，并且没有其他安排时触发这个事件。
		uncaughtException
		当一个异常冒泡回到事件循环，触发这个事件。
		Signal事件
		当进程接收到信号时就触发。
	退出状态码
	process属性
		1.stdout=>标准输出流
		2.stderr=>标准错误流
		3.stdin=>标准输入流
		4.argv=>返回一个数组，由命令行执行脚本时的各个参数组成。第一个参数node,第二个参数是脚本文件名,其余成员是脚本文件的参数
		5.execPath=>返回执行当前脚本的node二进制文件的绝对路径
		6.execArgv=>返回一个数组，成员是命令行下执行脚本时，在node可执行文件与脚本文件之间的命令行参数
		7.env=>返回一个对象，成员为当前shell的环境变量
		8.exitCode=>进程退出时的代码，如果进程通过process.exit()退出，不需要指定退出码。
		9.version=>node版本
		10.versions=>包含了node的版本和依赖
		11.config=>一个包含涌来变异当前node执行文件的js配置选项的对象
		12.pid=>当前进程的进程号
		13.title=>进程名，默认为'node',可以自定义该值
		14.arch=>当前CPU的架构
		15.platform=>运行程序所在的平台系统
		16.mainModule
		=>require.main的备选方法。
	process方法:
		abort()=>这将导致node触发abort事件，让node退出并生成一个核心文件
		chdir()=>改变当前工作进程的目录，如果操作失败抛出异常
		cwd()=>返回当前进程的工作目录
		exit()=>使用指定的code结束进程。如果忽略，将会使用code 0;
		getgid()=>获取进程的群组标识。获取到得时群组的数字id，而不是名字
		memoryUsage()=>返回一个对象，描述了 Node 进程所用的内存状况，单位为字节。
		nextTick(callback)=>一旦当前事件循环结束，调用回到函数。
		uptime()=>返回node已经运行的秒数
		hrtime()=>返回当前进程的高分辨事件,会返回两者间的时间差，用来基准和测量时间间隔。		
## 11.node.js常用工具
	util.inherits(constructor,superConstructor);
	util.inspect(object,[showHidden],[depth],[colors])=>将一个任意对象转换为字符串的方法，并不会简单地直接把对象转换为字符串！
	object 必须 要转换的对象
	showHidden 非必须 true将输出更多隐藏信息
	depth 非必须 表示最大递归的层数，若对象很复杂，你可以指定层数以控制输出信息的多少！不设置默认两层，指定为null表示将不限递归层数完整遍历对象。
	color：非必须 true后会以ascii编码，更漂亮
	util.isArray(object)=>若参数object是一个数组返回true否则是false
	util.isRegExp(object)=>若参数object是一个正则表达式返回true否则是false
	util.isDate(object)=>若参数object是一个日期返回true否则是false
	util.isError(object)=>若参数object是一个错误对象返回true否则是false
## 12.文件系统
	1.读取文件
		1.)异步读取
			fs.readFile(path,function(err,data){data.toString()});
		2.)同步读取
			fs.readFileSync(path).toString();
	2.打开文件
		1.)异步打开文件
			fs.open(path, flags[, mode], callback)
			path-文件的路径
			flags-文件打开的行为
				r 以读取模式打开文件，文件不存在抛出异常
				r+ 以读写模式打开文件，文件不存在抛出异常
				rs 以同步方式读取文件
				rs+ 以同步方式读取和写入文件
				w 以写入模式打开文件，文件不存在则创建
				wx 类似w，如果文件路径存在，则写入文件失败
				w+ 以读写模式打开文件，文件不存在则创建
				wx+ 类似w+但是文件路径存在，则文件读写失败
				a 以追加模式打开文件，文件不存在则创建
				ax 类似a但是如果文件路径存在，则文件追加失败
				a+ 以读取追加模式打开文件，文件不存在则创建
				ax+ 类似a+，但是如果文件路径存在，则文件读取追加失败
			mode-设置文件模式(权限)，文件创建默认权限为0666(可读，可写)
			callback-回调函数，带有两个参数如：callback(err,fd)		
		2.)同步打开文件
	3.获取文件信息
		fs.stat(path,callback)
			path-文件路径
			callback-回调函数，带两个参数（err,stats）,stats是fs.Stats对象
			stats.isFile()=>是文件返回true，否则false
			stats.isDirectory()=>是目录返回true,否则false
			stats.isBlockDevice()=>块设备返回true，否则false
			stats.isCharacterDevice()=>字符设备true，否则false
			stats.isSymbolicLink()=>软链接true，否则false
			stats.isFIFO()=>FIFO为true，否则false
			stats.isSocket()=>Socket为true，否则false
	4.写入文件
		fs.writeFile(file,data,options,callback);
			path-文件名或文件描述符
			data-要写入的数据String字符串或者Buffer(流)对象
			options- 该参数是一个对象。{encoding，mode,flag}=>默认值encoding=>utf8,mode=>0666,flag=>w
			callback-回调函数，只包含错误信息参数(err),写入失败时返回！
	5.读取文件
		fs.read(fd,buffer,offset,length,position,callback)
			fd-通过fs.open()方法返回的文件描述符
			buffer-数据写入的缓冲区
			offset-缓冲区写入的写入偏移量
			length-要从文件中读取的字节数
			position-文件读取的起始位置=>若为null,则从当前文件指针的位置读取
			callback-回调函数,三个参数err,bytesRead,buffer,
				err=>错误信息
				bytesRead=>表示读取的字节数
				buffer=>缓冲区对象
	6.关闭文件
		fs.close(fd,callback)
			fd-通过fs.open()方法返回的文件描述符
			callback-回调函数，没有参数
	7.截取文件
		fs.ftruncate(fd,len,callback)
			fd-通过fs.open()方法返回的文件描述符
			len-文件内容截取的长度
			callback-回调函数，没有参数
	8.删除文件
		fs.unlink(path,callback)
			path-文件路径
			callback-回调函数，没有参数
	9.创建目录
		fs.mkdir(path,mode,callback)
			path-文件路径
			mode-设置目录权限，默认为0777
			callback-回调函数，没有参数
	10.读取目录
		fs.readdir(path,callback)
			path-文件路径
			callback-回调函数（两个参数err=>错误信息,files=>目录下的文件数组列表）
	11.删除目录
		fs.rmdir(path,callback)
			path-文件路径
			callback-回调函数，没有参数
## 13.web模块
	1.创建web服务器
	2.创建web客户端
## 14.Express框架