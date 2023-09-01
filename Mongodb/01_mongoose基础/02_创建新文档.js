const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功回调
mongoose.connection.once('open', () => {
    console.log('连接成功');

    // 创建文档的结构对象-约束文档属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 创建模型对象-封装文档操作的对象
    const BookModel = mongoose.model('books', BookSchema);

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
})

// 连接错误回调
mongoose.connection.on('error', () => {
    console.log('连接错误');

})

// 连接结束回调
mongoose.connection.on('close', () => {
    console.log('结束连接。。。');
})
