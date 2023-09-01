// 导入 express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
app.get('/set-cookie', (req, res) => {
    // res.cookie('name','zhangsan'); // 会在浏览器关闭的时候销毁
    res.cookie('name', 'lisi', { maxAge: 60 + 1000 }); // maxAge相当于生命周期-60s
    res.send('home');
});

// 删除 cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('删除成功');
});

// 获取 cookie
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send(`欢迎你 ${req.cookies.name}`);
});

// 启动服务
app.listen(3000);