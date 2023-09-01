const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel');
const md5 = require('md5');

// 注册-页面
router.get('/reg', (req, res) => {
    // 响应html
    res.render('auth/reg');
});

// 注册-功能
router.post('/reg', (req, res) => {
    // 响应html
    UserModel.create({ ...req.body, password: md5(req.body.password) }).then(data => {
        console.log(data);
        res.render('success', { msg: '注册成功', url: '/login' });
    }).catch(err => {
        if (err) {
            res.status(500).send('注册失败');
            return;
        }
    })
});

// 登录-页面
router.get('/login', (req, res) => {
    // 响应html
    res.render('auth/login');
});

// 登录-功能
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username, password: md5(password) }).then(data => {
        console.log(data);
        // 写入session
        req.session.username = data.username;
        req.session._id = data.id;
        res.render('success', { msg: '登录成功', url: '/account' });
    }).catch(err => {
        if (err) {
            res.status(500).send('登录失败');
            return;
        }
    })
})

module.exports = router;