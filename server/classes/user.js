/*
 * @Author: liuchenxi
 * @Date: 2020-10-19 11:13:57
 * @LastEditTime: 2020-11-05 15:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-express-admin\server\mysql\classes\user.js
 */
import db from '../config.js'

export default class User {
  getUser (params, callback) {
    let sql = `SELECT * FROM user WHERE userName = '${params.userName}'`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }
}
