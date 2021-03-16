/*
 * @Author: liuchenxi
 * @Date: 2020-10-17 11:57:12
 * @LastEditTime: 2020-11-05 15:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-express-admin\server\routes\users.js
 */
import express from 'express'
import User from '../classes/user'

var router = express.Router()
let user = new User()

// 登录接口   /user/login
router.post('/login', function (req, res, next) {
  const params = {
    userName: req.body.userName,
    password: req.body.password
  }
  user.getUser(params, (err, data) => {
    if (err) {
      res.json({ code: '500', msg: data })
    }
    const userInfo = data[0]
    if (userInfo) {
      if (userInfo.password === req.body.password) {
        res.json({
          code: '0',
          msg: 'Success',
          data: userInfo
        })
      } else {
        res.json({
          code: '-1',
          msg: 'Failed',
          data: '密码错误'
        })
      }
    } else {
      res.json({
        code: '-1',
        msg: 'Failed',
        data: '用户名不存在'
      })
    }
  })
})

module.exports = router
