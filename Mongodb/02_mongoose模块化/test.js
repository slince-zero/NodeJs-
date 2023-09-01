// 导入db
const db = require('./db/db')

// 导入MovieModel
const MovieModel = require('./models/MovieModel')

// 调用函数
db(() => {
    MovieModel.create({ title: '海贼王', author: '尾田榮一郎' }).then(data => {
        console.log(data);
        console.log('添加成功');
    }).catch(err => {
        console.log(err);
    })
}, () => {
    console.log('连接失败');
});