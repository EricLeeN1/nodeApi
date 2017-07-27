注册，登陆，发微博
没有关注与收听机制，所有人的微博，都能被看见（向论坛）；
按时间排序

可以点赞评论

数据库中collection
users这个集合，存储用户的信息。
数据包括。
{
"_id":"asdads",
"username":"张三",
"password":"加密后"
"avaraUrl":"url",
"sign":"个性签名"
}
articles集合
{
"title":"标题",
"content":"内容",
"author":"小明",
"date":"日期",
"comments":[]
}
