const mongoose = require('mongoose');

// 创建文档的结构对象-约束文档属性以及属性值的类型
const AccountSchema = new mongoose.Schema({
    // 标题
    title: {
        type: String,
        required: true
    },
    // 时间
    time: Date,
    // 类型
    type: {
        type: Number,
        default: -1
    },
    // 金额
    account: {
        type: Number,
        required: true
    },
    // 备注
    remarks: {
        type: String
    }
});

// 创建模型对象-封装文档操作的对象
const AccountModel = mongoose.model('accounts', AccountSchema);

module.exports = AccountModel;