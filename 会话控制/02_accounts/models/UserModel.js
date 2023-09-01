const mongoose = require('mongoose');

// 创建文档的结构对象-约束文档属性以及属性值的类型
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// 创建模型对象-封装文档操作的对象
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;