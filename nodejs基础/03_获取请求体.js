const http = require('http')

const server = http.createServer((req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    req.on('end', () => {
        console.log(body);
        res.end('Hello')
    })
})



server.listen(9000, () => {
    console.log('server is runing')
})