/*
 * @Author: 刘晨曦
 * @Date: 2021-03-16 15:54:41
 * @LastEditTime: 2021-03-17 09:51:33
 * @LastEditors: Please set LastEditors
 * @Description: 数据库的一些配置
 * @FilePath: \server\models\users.js
 */
import db from '../../db.config.js'
import Sequelize from 'sequelize'

// 建立数据映射表
let usersModel = db.define('users', {
  userId: {
    type: Sequelize.STRING(50),
    primaryKey: true // 主键
  },
  userName: Sequelize.STRING(50),
  password: Sequelize.STRING(50),
  avatarPic: Sequelize.STRING(255),
  createdTime: Sequelize.STRING(255)
}, {
  timestamps: false // 关闭Sequelize的自动添加timestamp的功能
})

export default usersModel
