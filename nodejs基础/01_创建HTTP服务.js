const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('hello world!你丫')
})

server.listen(9000, () => {
    console.log('server is runing....');
})

