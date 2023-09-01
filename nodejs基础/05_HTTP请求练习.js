const http = require('http')

const server = http.createServer((req, res) => {
    // 获取请求方法
    let { method } = req
    console.log(method)
    // 获取请求路径
    let {pathname} = new URL(req.url, 'http://127.0.0.1')
    console.log(pathname)
    res.setHeader('content-type', 'text/html;charset=utf-8')
    if (method == 'GET' && pathname == '/login') {
        res.end('登录')
    } else if (method == 'GET' && pathname == '/reg') {
        res.end('注册')
    } else {
        res.end('404 NOT FOUND')
    }
})


server.listen(9000, () => {
    console.log('server is runing...');
})