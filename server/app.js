/*
 * @Author: liuchenxi
 * @Date: 2020-10-17 10:28:08
 * @LastEditTime: 2021-03-17 10:02:55
 * @LastEditors: Please set LastEditors
 * @Description: Express入口文件
 * @FilePath: \server\app.js
 */
import 'babel-register'
import express from 'express'
import path from 'path'
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import routers from './router.config' // Router
import jwt from './utils/jwt'
import expressJwt from 'express-jwt'

let app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3001

//! 解析Token获取用户信息
app.use(function (req, res, next) {
  var token = req.headers['authorization']
  if (token == undefined) {
    return next()
  } else {
    jwt.verifyToken(token).then(data => {
      req.data = data
      return next()
    }).catch(() => {
      return next()
    })
  }
})

//! 验证 Token 是否过期并设置白名单
app.use(expressJwt({
  secret: 'liuchenxi0428', // 密匙
  algorithms: ['HS256']
}).unless({
  path: ['/api/v1/user/login']// 白名单，其他的URL都需要验证
}))

//! 挂载所有的路由
routers.forEach(item => {
  app.use(item.prefix, item.router)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //! catch 401 error
  if (err.name === 'UnauthorizedError') {
    res.status(401)
    res.json({
      code: '-1',
      msg: err.message,
      data: null
    })
    return
  }

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(
  port,
  console.log(`application is start at port ${host}:${port}`)
)

module.exports = app
