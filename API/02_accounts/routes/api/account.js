var express = require('express');
var router = express.Router();


// 导入moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

//记账本的列表
router.get('/account', function (req, res, next) {
    //获取所有的账单信息
    // let accounts = db.get('accounts').value();
    // 获取集合列表--查数据库
    AccountModel.find().sort({ time: -1 }).exec().then(data => {
        console.log(data);
        res.json({
            code: '200',
            msg: '读取成功',
            data: data
        })
        return;
    }).catch(err => {
        if (err) {
            res.json({
                code: '1001',
                msg: '读取失败',
                data: null
            })
        }
    })
});



//新增记录
router.post('/account', (req, res) => {
    // 插入数据库
    AccountModel.create({
        ...req.body,
        // 修改time属性
        time: moment(req.body.time).toDate()
    }).then(data => {
        console.log(data);
        //成功提醒
        res.json({
            code: '200',
            msg: '添加成功',
            data: data
        })
    }).catch(err => {
        if (err) {
            res.json({
                code: '1001',
                msg: '添加失败',
                data: null
            })
        }
    })

});

//删除记录
router.delete('/account/:id', (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    //删除
    // db.get('accounts').remove({ id: id }).write();
    AccountModel.deleteOne({ _id: id }).then(data => {
        console.log(data);
        //提醒
        res.json({
            code: '200',
            msg: '删除成功',
            data: {}
        })
    }).catch(err => {
        if (err) {
            res.json({
                code: '1001',
                msg: '删除失败',
                data: null
            })
            return;
        }
    })

});

// 获取单个账单信息
router.get('/account/:id', (req, res) => {
    // 获取 id 参数
    const { id } = req.params;
    // 查数据库
    AccountModel.findById(id).then(data => {
        // 成功响应
        res.json({
            code: 200,
            msg: '读取成功',
            data: data
        })
    }).catch(err => {
        if (err) {
            res.json({
                code: '1001',
                msg: '读取失败',
                data: null
            })
        }
    });
})


// 更新单个账单信息--出现回调地狱问题，后续用 promise 来解决
router.patch('/account/:id', (req, res) => {
    // 获取 id 参数
    const { id } = req.params;
    // 更新数据库
    AccountModel.updateOne({ _id: id }, req.body)
        .then(() => {
            // 成功响应
            // 再次查询数据库
            AccountModel.findById(id)
                .then(data => {
                    res.json({
                        code: 200,
                        msg: '更新成功',
                        data: data
                    })
                }).catch(err => {
                    if (err) {
                        res.json({
                            code: '1001',
                            msg: '读取失败',
                            data: null
                        })
                    }
                })

        })
})

module.exports = router;
