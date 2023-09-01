
// 导入db
const db = require('./db/db')
const BookModel = require('./models/BookModel')
// 调用
db(() => {
    // console.log('连接成功');

    // 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 200
    },).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}, () => {
    console.log('连接失败');
});




