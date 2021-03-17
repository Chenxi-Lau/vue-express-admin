/*
 * @Author: liuchenxi
 * @Date: 2020-10-19 11:13:57
 * @LastEditTime: 2021-03-17 09:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-express-admin\server\mysql\classes\user.js
 */
import crypto from 'crypto'
// import sequelize from '../config.js'
import userModel from '../models/user'
import jwt from '../../utils/jwt'

export default class UserController {
  // 用户登录
  async login (req, res, next) {
    const params = request.query
    if (!params.userName || !params.password) {
      return req.json({
        code: '000002',
        msg: '参数不合法',
        data: []
      })
    }
    // 数据库查找用户是否存在
    const result = await userModel.findAll({
      where: {
        userName: params.userName,
        password: crypto.createHash('md5').update(params.password).digest('hex')
      }
    })
    if (result.length) {
      const token = await jwt.generateToken(result[0].userName, result[0].userId)
      return res.json({
        code: '0',
        msg: 'SUCCESS',
        data: {
          userInfo: result[0],
          token
        }
      })
    } else {
      return res.json({
        code: '000002',
        msg: '用户名或密码错误',
        data: []
      })
    }
  }

  async verify (req, res, next) {
    if (req.data) {
      return res.json({
        code: '0',
        msg: '身份验证成功',
        data: {
          userName: req.data.name,
          userId: req.data.id
        }
      })
    } else {
      return req.json({
        code: '-1',
        msg: '未获取到用户信息',
        data: null
      })
    }
  }
}
