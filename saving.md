# 前导 npm->node package manage
	
	1. npm -> node package manage
	2. npm主要职责
		1. 安装开发包和管理依赖项

# 一、Node部分简介

## 1.1 node特性 2017/7/13 22:01:30 

	1. 单线程:
		1). 好处:减少了内存开销，操作系统的内存换页
		2). 如果某个事情进入了但是被I/O阻塞了，那这个线程就阻塞了
	2. 非阻塞I/O
		1). 不会傻等I/O语句结束，而会执行后面的语句
		2). 但是非阻塞也有问题
	3. 事件机制，事件环
		1). 不管是新用户的请求，还是老用户的I/O完成，都将以事件方式加入事件环等带调度  
		
## 1.2 适合开发方向

	1. 当应用程序需要处理大量并发的I/O，而且在向客户发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node.js非常适合，Node.js也非常适合与socket配合，开发长连接的实时交互应用程序--比如
		1. 用户表单收集
		2. 考试系统
		3. 聊天室
		4. 图文直播
		5. 提供JSON的API(为前台Angular使用)

## 1.3 没有WEB容器但是厉害之处在于顶层路由设计2017/7/16 11:38:59
	
	node.js没有根目录的概念，因为它根本没有任何的web容器！
	让Node.js提供静态服务都非常难
	相对目录相对的是盘符路径 
	URl和真实物理文件，是没有关系的。URl是通过了Node的顶层路由设计，呈递某一个静态文件的
# 二、Node部分模块
## 1、HTTP模块

	Node.js中，将很多的功能，划分为一个个module模块，
	具体参考day01->03_http.js
	1. `var http = require('http');` -> 请求http模块
	2. `var server = http.createServer(function(req, res) {}` -> 创建一个服务器，回调函数表示接收到请求之后做的事情
	3. `server.listen(3000, '127.0.0.1');` -> 设置服务器端口与地址
	4. `res`：
		1. `res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });` =-> 设置响应头。
		2. `res.end()` -> 每一次必须使用res.end();end里面必须写成字符串格式或者buffer格式
		3. `res.write('<h2>我是主标题</h3>');` -> 向页面内写入内容
		
	5. `req`: 
		1. `req.url` -> 表示用户的请求URL地址，所有的路由设计，都是通过req.url来实现的。我们比较关心的不是拿不到URL,而是识别这个URL
		2. 识别URl，用到两个新模块，第一个url模块，第二个是querystring模块(貌似已废弃,因为url模块足够了)
			1. url
				1. 引包->`var url = require('url');`
				2. `url.parse` -> url.parse可以将一个完整的URL地址，分为很多部分
					1. 例如:`host/port/pathname/path/search/query`
				3. `var query = url.parse(req.url, true).query;` -> 如果第二个参数为true，那么就可以将所有的查询变为对象,就可以直接打点得到参数
					1. 例如:`age = query.age;`
			2. querystring->已废弃貌似,不用考虑了
				1. `querystring.parse`
	6. 实例参考图lizi.png

## 2、fs模块
	
	1. 引包
		1. `var fs = require('fs');`
		
## 3.module模块
    
     1. 可以将一个JavaScript文件中，描述一个类。用module.export=构造函数名的方式向外暴露一个类；
     也就是说js文件和js文件之间有两种合作的模式
        1. 某一个js文件中，提供了函数，供别人使用，只要暴露函数就行了 exports.msg=msg;
        2. 某一个js文件，描述了一个类。 module.exports =People;
     2. `var foo = require('foo.js')`;
        1. 如果不写./ 那么默认是node_modules文件夹文件
     3. `var bar = require('bar')`;
        1. 可以使用文件夹来管理模块，那么Node.js将会去寻找node_modules目录下的bar文件中的index.js文件去执行。
     4. 每一个模块文件夹中，推荐都写一个package.json文件，这个文件的名字不能改，node将自动读取里面的配置，有一个main项，就是文件入口
        `{
           "name": "Eric",
           "version": "0.0.1",
           "main": "app.js"
         }`
         package.json文件要放到模块文件的根目录去