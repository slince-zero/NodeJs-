const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // 解析url
    let result = url.parse(req.url, true)
    // console.log(result);

    // 路径
    let pathname = result.pathname
    // 查询字符串
    let keyword = result.query.keyword
    console.log(pathname, keyword);
    res.end('url......')

})

server.listen(9000, () => {
    console.log('server is runing');
})