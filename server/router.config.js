/*
 * @Author: 刘晨曦
 * @Date: 2021-03-17 09:36:24
 * @LastEditTime: 2021-03-17 09:45:48
 * @LastEditors: Please set LastEditors
 * @Description: 所有路由的入口文件
 * @FilePath: \server\router.config.js
 */
import userRouter from './routes/interfaces/user.js'

export default [
  {
    prefix: '/api/v1/user',
    router: userRouter
  }
]
