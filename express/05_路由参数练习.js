// 导入express
const express = require('express')
const { singers } = require('./singer.json')


// 创建应用对象
const app = express()

// 创建路由
app.get('/singer/:id.html', (req, res) => {
    let { id } = req.params
    let result = singers.find(item => {
        if (item.id == Number(id)) {
            return true
        }
    })

    if (!result) {
        res.statusCode = 404
        res.end(`<h1>404 NOT FOUND</h1>`)
        return
    }

    res.end(`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${result.singer_name}</h1>
        <h1>${result.singer_id}</h1>
    </body>
    </html>
    
    `)


})

// 监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动.....');
})