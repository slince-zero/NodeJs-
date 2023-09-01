const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, 'http://127.0.0.1')
    if (pathname === '/index.html') {
        let html = fs.readFileSync('./page/index.html')
        res.end(html)
    } else if (pathname === '/css/index.css') {
        let css = fs.readFileSync('./page/css/index.css')
        res.end(css)
    }
    else if (pathname === '/js/index.js') {
        let js = fs.readFileSync('./page/js/index.js')
        res.end(js)
    }
})

server.listen(9000, () => {
    console.log('server is runing......');
})