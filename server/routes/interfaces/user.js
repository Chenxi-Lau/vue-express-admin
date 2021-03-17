/*
 * @Author: 刘晨曦
 * @Date: 2021-03-16 16:00:59
 * @LastEditTime: 2021-03-17 09:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\interfaces\user.js
 */
import express from 'express'
import UserController from '../classes/user'

let router = express.Router()
let user = new UserController()

router.post('/login', user.login)
router.get('/verify', user.verify)

module.exports = router
