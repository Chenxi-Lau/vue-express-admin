/*
 * @Author: liuchenxi
 * @Date: 2020-09-25 22:19:03
 * @LastEditTime: 2020-11-05 15:10:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\model\config.js
 */
import mysql from 'mysql'

let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'liuchenxi0428',
  database: 'blog-nuxt'
})

let query = (sql, callback) => {
  try {
    pool.getConnection((err, connection) => {
      // 连接失败, 打印错误
      if (err) {
        console.log('\x1B[31m%s\x1B[0m', 'MYSQL CONNECTION ERROR' + err)
        return callback(true)
      }
      // 链接成功，sql为查询语句，params为查询参数，后面为回调函数
      connection.query(sql, (err, result) => {
        connection.release() // 释放链接
        // 查询失败，打印错误
        if (err) {
          console.log('\x1B[31m%s\x1B[0m', 'MYSQL QUERY ERROR' + err)
          return callback(true, err)
        }
        console.log('\x1B[32m%s\x1B[0m', 'MYSQL QUERY SUCCESS')
        callback(false, result)
      })
    })
  } catch (err) {
    console.log('\x1B[31m%s\x1B[0m', 'MYSQL ERROR' + err)
    return callback(true)
  }
}

export default {
  query
}
