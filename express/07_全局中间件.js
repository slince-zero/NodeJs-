// 导入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express()

function recordMiddle(req, res, next) {
    // 获取 url ip
    const { url, ip } = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
    next()
}

app.use(recordMiddle)
// 创建路由
app.get('/home', (req, res) => {

    res.send('前台首页')
})


app.get('/admin', (req, res) => {
    res.send('后台首页')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})


// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})
