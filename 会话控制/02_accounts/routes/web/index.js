var express = require('express');
var router = express.Router();


// 声明中间件检测登录
const checkLoginMiddleware = require('../../middleWare/checkLoginMiddleware');

// 导入moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
// test moment
// console.log(moment('2023-1-1').toDate());
// test moment-format object
// console.log(moment(new Date()).format('YYYY-MM-DD'));

//记账本的列表
router.get('/account', checkLoginMiddleware, function (req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  // 获取集合列表--查数据库
  AccountModel.find().sort({ time: -1 }).exec().then(data => {
    console.log(data);
    res.render('list', { accounts: data, moment: moment });
  }).catch(err => {
    if (err) {
      res.status(500).send('读取失败');
      return;
    }
  })
});

//添加记录
router.get('/account/create', checkLoginMiddleware, function (req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', checkLoginMiddleware, (req, res) => {
  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time属性
    time: moment(req.body.time).toDate()
  }).then(data => {
    console.log(data);
    //成功提醒
    res.render('success', { msg: '添加成功哦~~~', url: '/account' });
  }).catch(err => {
    console.log(err);
  })

});

//删除记录
router.get('/account/:id', checkLoginMiddleware, (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  // db.get('accounts').remove({ id: id }).write();
  AccountModel.deleteOne({ _id: id }).then(data => {
    console.log(data);
    //提醒
    res.render('success', { msg: '删除成功~~~', url: '/account' });
  }).catch(err => {
    if (err) {
      res.status(500).send('删除失败');
      return;
    }
  })

});

// 退出登录
router.get('/logout', (req, res) => {
  // 销毁session
  req.session.destroy(() => {
    res.render('success', { msg: '退出成功', url: '/login' });
  })
});

module.exports = router;
