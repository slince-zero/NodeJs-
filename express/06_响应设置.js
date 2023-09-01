// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home',(req,res)=>{
    // 原生响应
    // res.statusCode=404
    // res.statusMessage='ssss'
    // res.setHeader('ssss','xxxx')
    // res.write('hello...')
    // res.end('.............')
    
    // express 操作
    res.status(500)
    res.set('aaa','bbb')
    res.send('你好呀')
    
}) 

// 监听端口，启动服务
app.listen(8000,()=>{
    console.log('服务已经启动.....');
})
