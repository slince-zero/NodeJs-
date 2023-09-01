// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
    // 原生操作
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)

    // express 操作
    console.log(req.path)
    console.log(req.query)
    console.log(req.get('host'))

})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})
