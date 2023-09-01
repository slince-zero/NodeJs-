// 导入express
const express = require('express')
const bodyParser = require('body-parser')
// 创建应用对象
const app = express()

// 解析 queryString 格式使用的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })


// 创建路由
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/09_form.html')
})

app.post('/login',urlencodedParser,(req,res)=>{
    // 获取用户名和密码
    console.log(req.body)
    res.send('获取用户的数据')
})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})
