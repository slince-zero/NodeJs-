const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // 获取请求的方法
    console.log(req.method)
    // 获取请求得url
    console.log(req.url) // /test/url,只包url中的路径与查询字符串，不包含协议和端口号
    // 获取HTTP协议的版本号
    console.log(req.httpVersion)
    // 获取请求头
    console.log(req.headers)
    res.end('hello world!你丫')
})

server.listen(9000, () => {
    console.log('server is runing....');
})

