const mongoose = require('mongoose');

// 创建文档的结构对象-约束文档属性以及属性值的类型
const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

// 创建模型对象-封装文档操作的对象
const BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;