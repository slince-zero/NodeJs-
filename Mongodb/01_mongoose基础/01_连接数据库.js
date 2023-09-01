const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
})

// 连接错误回调
mongoose.connection.on('error', () => {
    console.log('连接错误');

})

// 连接结束回调
mongoose.connection.on('close', () => {
    console.log('结束连接。。。');
})

// 关闭连接
// setTimeout(() => {
//     mongoose.disconnect();
// },2000)