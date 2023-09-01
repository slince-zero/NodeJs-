// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

app.get('/', (req, res) => {
    res.end('home')
})

app.post('/login',(req,res)=>{
    res.end('login.......')
})

app.all('/test',(req,res)=>{
    res.end('test........')
})

app.all('*',(req,res)=>{
    res.end('404.........')
})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})
