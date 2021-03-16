/*
 * @Author: liuchenxi
 * @Date: 2020-11-10 10:04:18
 * @LastEditTime: 2020-11-20 15:51:49
 * @LastEditors: Please set LastEditors
 * @Description: 文章模板的类
 * @FilePath: \server\classes\templates.js
 */

import db from '../config.js'

export default class Template {
  // 获取模板列表，传空默认查全部
  getTemplatesList (params, callback) {
    let sql = 'SELECT * FROM templates'
    if (params.id) {
      sql += ` WHERE id = ${params.id}`
    }
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 新增模板
  createTemplate (params, callback) {
    let sql = `INSERT INTO templates (name, content, description, createdTime, updatedTime) VALUES ('${params.name}', '${params.content}', '${params.description}', NOW(), NOW())`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 删除模板
  deleteTemplateById (params, callback) {
    let sql = `DELETE FROM templates WHERE id = ${params.id}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 更新模板
  updateTemplateById (params, callback) {
    let sql = `UPDATE templates SET name = '${params.name}', content = '${params.content}',  description = '${params.description}', updatedTime = NOW() WHERE id = ${params.id}`
    db.query(sql, (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }
}
