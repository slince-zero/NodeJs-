// 导入express
const express = require('express')
const path = require('path')

// 创建应用对象
const app = express()

// 1.设置模板引擎
app.set('view engine', 'ejs')
// 2.设置模板文件存放位置
app.set('views', path.resolve(__dirname, './views'))

// 创建路由
app.get('/home', (req, res) => {
    // 3.render响应
    const title = '你好呀！！~~~~~'
    res.render('home', { title })
})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....') 
})
