#	MongoDB 
[https://www.mongodb.com](https://www.mongodb.com "官网地址")

[https://docs.mongodb.com/](https://docs.mongodb.com/ "文档地址")
##	1.安装	2017/7/25 14:52:22 
	
	1. 32位貌似很少
	2. 64位直接下载即可
	tips: 不知道需要安装的补丁还在不在,window7系统需要更新KB2731284号补丁(可能分32位或64位)

##	2.部署
	
	1. 加入到系统的path环境变量中,之后在系统的任何盘符使用mongodb命令

##	3.文件
	
	mongo	使用数据库
	mongod	开机
	mongoimport	导入数据

	开机命令->mongod --dbpath c:\mongo
	--dbpath 就是选择数据库文档所在的文件夹
		即mongoDB中，真的有物理文件，对应一个个数据库，U盘可以拷走
		这个命令行窗口一定要保持，开机这个CMD不能动了，不能关，不能Ctrl+C。一旦这个cmd有问题了，数据库就自动关闭了。
		应该再开一个cmd。
	mongo-连接
		那么运行环境就是mongo语法了
		方法:
		1. showdbs -> 列出所有数据库
		2. use -> 使用某个数据库
		3. use -> 新建数据库
			use一个不存在的数据库名字
		4. show collections -> 有哪些集合
		5. db.student.find() -> 查看集合中的数据
			1. db.student.insert({"name":"san","age":18});->student就是所谓的集合，集合中存储着很多json
			2. db. 一个未知的集合名字，这个集合会自动创建
		6. mongoimport --db test --collection restaurants --drop --file primer-dataset.json -> 导入外部数据
			1. db test -> 想往哪个数据库里面导入
			2. collection restaurants -> 想往哪个集合里面导入
			3. file primer-dataset.json -> 哪个文件
		7. db.student.find() -> 查找数据
			1. db.student.find({"score.math":70}) -> 精确匹配
			2. db.student.find({"score.math":70，"age":12}) -> 多个匹配
				1. 分数70并且年龄12
			3. db.student.find({"score.math":{$gt:50}}) -> 大于匹配
				大于50分
			4. db.student.find({"score.math":{$lt:50}}) -> 小于匹配
				小于50分
			5. db.student.find({$or:[{"score.math":70},{"score.math":71}]}) -> 或匹配
				分数是70或者71
			6. db.student.find({"score.math":{$gt:50}}).sort({"score.math":-1,"age":1}) -> 大于匹配