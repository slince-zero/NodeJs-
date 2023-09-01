// 导入express
const express = require('express')

// 创建应用对象
const app = express()


// 声明中间件
const checkCodeMiddle = (req, res, next) => {
    if (req.query.code == '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}

// 创建路由
app.get('/home', checkCodeMiddle, (req, res) => {
    res.send('首页')
})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})
