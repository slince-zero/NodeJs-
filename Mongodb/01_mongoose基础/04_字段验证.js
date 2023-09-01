const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功回调
mongoose.connection.once('open', () => {
    console.log('连接成功');

    // 创建文档的结构对象-约束文档属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: '匿名' // 默认值   
        },
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date,
        style: {
            type: String,
            enum: ['言情', '恐怖', '现代', '历史']  // 设置的值必须是数组中的
        }
    });

    // 创建模型对象-封装文档操作的对象
    const BookModel = mongoose.model('books', BookSchema);

    // 新增
    BookModel.create({
        name: '西游记', // 如果为空，或者没有这个字段，会报错
        author: '吴承恩',
        price: 200,
        is_hot: true,
        tags: ['妖魔', '神话', '历史'],
        pub_time: new Date(),
        style: '历史'
    },).then(data => {
        console.log(data);
        mongoose.disconnect();
    }).catch(err => {
        console.log(err);
        mongoose.disconnect();
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
