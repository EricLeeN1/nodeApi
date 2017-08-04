# Node.js
	2017/8/4 14:39:44 

###(1). 特点:

	1. 单线程、
	2. 异步I/O*（非阻塞）、
	3. 事件驱动（实践环）

###(2). 适合区域：

	留言本、考试系统、说说、图片裁切服务器

###(3). 模块

	1. Node.js原生:
		- http、fs、path、url
			-> 静态服务、原生路由、GET、POST请求
	2. 第三方：
		- formidable
		- gm
		- express-session
		- cookie-parser
		- mongodb
		- mongoose
		- sily-datetime
		- ejs
		- socket.io
	3.Express框架：
		- 中间件、MVC建站、模板引擎ejs
			-> 静态服务、原生路由、GET、POST请求
###(4).服务器的一些概念：
	
	Cookie、Session	

###(5). 持久化NoSQL:非关系型数据库 -> Not Only SQL

	特点：
		没有schema，没有行和列。用文档(json)储存。
	mongodb：
		安装、开启、导入数据、Shell管理数据库、Mongo Vu、 Node.js做CRUD(增删改查)、DAO层的封装
	操作符：
		$set $lt $gt $push $pull
	Mongoose
		ODM,不用直接操作数据库，操作对象自动持久化
	
	
