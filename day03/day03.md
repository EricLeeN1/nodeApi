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