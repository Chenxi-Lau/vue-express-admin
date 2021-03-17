/*
 * @Author: your name
 * @Date: 2021-03-16 20:27:11
 * @LastEditTime: 2021-03-17 09:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\utils\jwt.js
 */

import jwt from 'jsonwebtoken'

const signKey = 'liuchenxi0428'

// https://www.npmjs.com/package/jsonwebtoken
// jwt.sign(payload, secretOrPrivateKey, [options, callback])

function generateToken (username, userId) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      name: username,
      _id: userId
    }, signKey, {
      expiresIn: '1h'
    })
    resolve(token)
  })
}

function verifyToken (token) {
  return new Promise((resolve, reject) => {
    const info = jwt.verify(token.split(' ')[1], signKey)
    resolve(info)
  })
}

export default {
  generateToken,
  verifyToken
}
