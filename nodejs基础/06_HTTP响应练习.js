const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const html = fs.readFileSync('./02_table.html')
    res.end(html)
})

server.listen(9000,()=>{
    console.log('server is runing....');
})