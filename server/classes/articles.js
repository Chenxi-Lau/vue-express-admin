/*
 * @Author: liuchenxi
 * @Date: 2020-11-02 15:29:51
 * @LastEditTime: 2020-11-11 16:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\classes\articles.js
 */
import db from '../config.js'

export default class Article {
  // 根据页码获取当前页Post列表
  getArticlesList (params, callback) {
    const pageNo = params.pageNo
    const pageSize = params.pageSize
    let sql = `SELECT * FROM articles WHERE userId = '${params.userId}'`
    if (params.status === 'published') {
      sql += ` AND status = '${params.status}'`
    }
    sql += ' ORDER BY id DESC'
    sql += ` LIMIT ${(pageNo - 1) * pageSize}, ${pageSize}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 按月或者日查询文章数量
  queryCountByMonthOrDay (params, callback) {
    let sql = ''
    if (params.type === 'month') {
      sql += `SELECT DATE_FORMAT(createdTime, '%Y-%m') AS month, COUNT(id) AS count FROM articles GROUP BY month;`
    } else {
      sql += `SELECT DATE_FORMAT(createdTime, '%Y-%m-%d') AS day, COUNT(id) AS count FROM articles GROUP BY day;`
    }
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 根据文章ID获取文章详情, params为文章的id
  getArticleById (params, callback) {
    let sql = `SELECT * FROM articles where id = ${params.id}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 获取Post总数
  getTotal (params, callback) {
    let sql = `SELECT COUNT(id) AS count FROM articles WHERE userId = '${params.userId}'`
    if (params.status === 'published') {
      sql += ` WHERE status = '${params.status}'`
    }
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result[0].count)
    })
  }

  // 新增文章
  publishArticle (params, callback) {
    let sql = `INSERT INTO articles (userId, title, markdown, status, metaTitle, metaDescription, tagName, createdTime, updatedTime) VALUES ('${params.userId}', '${params.title}', '${params.markdown}', '${params.status}', '${params.metaTitle}', '${params.metaDescription}', '${params.tagName}', NOW(), NOW())`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 通过文章的ID删除文章
  deleteArticleById (params, callback) {
    let sql = `DELETE FROM articles WHERE id = ${params.id}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 通过文章的ID删除文章
  updateArticleById (params, callback) {
    let sql = `UPDATE articles SET title = '${params.title}', markdown = '${params.markdown}', status = '${params.status}', metaTitle = '${params.metaTitle}', metaDescription =  '${params.metaDescription}', tagName = '${params.tagName}', updatedTime = NOW() WHERE id = ${params.id}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }
}
