/**
 * 
 * @param {*} success 数据库连接成功回调
 * @param {*} error  数据库连接失败回调
 */
module.exports = function (success, error) {

    // 导入mongoose
    const mongoose = require('mongoose');
    // 导入配置文件
    const { DBHOST, DBPORT, DBNAME } = require('../config/config');

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    // 连接成功回调
    mongoose.connection.once('open', () => {
        success();
    })


    // 连接错误回调
    mongoose.connection.on('error', () => {
        error();
    })

    // 连接结束回调
    mongoose.connection.on('close', () => {
        console.log('结束连接。。。');
    })
}