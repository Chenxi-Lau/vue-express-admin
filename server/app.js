/*
 * @Author: liuchenxi
 * @Date: 2020-10-17 10:28:08
 * @LastEditTime: 2020-11-10 10:38:14
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

// Router
import userRouter from './routes/user'
import articleRouter from './routes/article'
import tagRouter from './routes/tags'
import templateRouter from './routes/template'

var app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3001

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Router
app.use('/user', userRouter)
app.use('/article', articleRouter)
app.use('/tag', tagRouter)
app.use('/template', templateRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, console.log(`application is start at port ${host}:${port}`)
)

module.exports = app
