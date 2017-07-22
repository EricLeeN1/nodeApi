# Express框架

## 1.安装
	
	1. npm install --save express
		1. --save 参数,表示自动修改package.json文件，自动添加依赖项

## 2 .特性
	
	1. 路由
	2. 静态文件服务
	3. 与模板引擎的配合

## 3. 路由详解

	1. 用get请求访问一个网址的时候，做什么事情->`app.get('网址',function(req,res){})`
	2. 用post请求访问一个网址的时候，做什么事情->`app.post('网址',function(req,res){})`
	3. 如果想处理这个网址的任何method的请求，那么写all->`app.all('网址',function(req,res){})`
	以上的网址不区分大小写
	4. 正则表达式可以被使用，正则表达式中，未知部分用圆括号分组，然后可以用`req.params[0]、[1]`
	5. ：冒号写法
		1. `app.get('/student/:id',function(req,res){})`
	6. 适合进行RESTful路由器。简单说就是一个路径，http method方法不同。对这个页面的使用也不同
		例： /student/123456
			1. get 读取学生信息
			2. add 添加学生信息
			3. delete 删除学生信息
			
## 4. 中间件

	1. 如果我的get/post函数中，没有next参数，那么就匹配上第一个路由，就不会往下匹配了。如果想往下匹配的话，那么需要写next();
	2. 地址冲突
	`app.get('/:username/:id', function(req, res) {
	console.log('1');
	res.send('用户信息:' + req.params.username);
	});
	app.get('/admin/login', function(req, res) {
    console.log('2');
    res.send('管理员登录');
	});`
		解决方法
		1. 交换位置 -> express中的所有的路由(中间件)的顺序至关重要，匹配上第一个就不会往下匹配了->路由get、post这些东西就是中间件，中间件讲究顺序，匹配上第一个之后，就不会往后匹配了。
		2. next()函数 -> 路由get、post这些东西就是中间件，中间件讲究顺序，匹配上第一个之后，就不会往后匹配了。调用next()函数才能够继续往后匹配