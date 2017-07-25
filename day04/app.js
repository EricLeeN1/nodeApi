/**
 * Created by Administrator on 2017/7/25.
 */
var express = require('express');
var app = express();
var shujuku=[
    {
        "biaoti":"我是0号新闻",
        "shijian":"2017年7月25日09:42:13",
        "zuozhe":"000",
        "neirong":"简介:这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介。"
    },
    {
        "biaoti":"我是1号新闻",
        "shijian":"2017年7月25日09:42:13",
        "zuozhe":"111",
        "neirong":"简介:这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介。"
    },
    {
        "biaoti":"我是2号新闻",
        "shijian":"2017年7月25日09:42:13",
        "zuozhe":"222",
        "neirong":"简介:这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介。"
    },
    {
        "biaoti":"我是3号新闻",
        "shijian":"2017年7月25日09:42:13",
        "zuozhe":"333",
        "neirong":"简介:这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介。"
    },
    {
        "biaoti":"我是4号新闻",
        "shijian":"2017年7月25日09:42:13",
        "zuozhe":"444",
        "neirong":"简介:这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介，这里是简介。"
    }
];
app.use(express.static('./public'));
app.get('/news', function (req, res) {
    res.json(shujuku);
});

app.listen(3000);
