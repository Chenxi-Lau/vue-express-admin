/*
 * @Author: your name
 * @Date: 2020-11-09 16:01:03
 * @LastEditTime: 2020-11-17 09:40:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\classes\tags.js
 */
import db from '../config.js'

export default class tag {
  // 获取所有标签名称
  getAllTags (callback) {
    let sql = 'SELECT id, name FROM tags'
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 根据TagName获取文章列表
  getArticlesByTagName (params, callback) {
    let sql = `SELECT id, title, updated_at, meta_description FROM articles WHERE tagName = "${params.name}" AND status = "published"`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 根据TagId获取对应的Post数量
  getCountByTag (params, callback) {
    let sql = `SELECT COUNT(id) AS count FROM articles WHERE tagName = "${params.name}" AND status = "published"`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(null, result[0].count)
    })
  }
}
