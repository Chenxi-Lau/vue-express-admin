/*
 * @Author: your name
 * @Date: 2020-10-17 10:28:08
 * @LastEditTime: 2020-10-17 10:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\routes\index.js
 */
// var express = require('express')
import express from 'express'
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
