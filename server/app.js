/*
 * @Author: liuchenxi
 * @Date: 2020-10-17 10:28:08
 * @LastEditTime: 2020-10-17 10:43:05
 * @LastEditors: Please set LastEditors
 * @Description: Express入口文件
 * @FilePath: \server\app.js
 */
require('babel-register')

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

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
