/*
 * @Author: liuchenxi
 * @Date: 2020-11-09 16:05:42
 * @LastEditTime: 2020-11-20 15:58:04
 * @LastEditors: Please set LastEditors
 * @Description: 标签的路由
 * @FilePath: \server\routes\tags.js
 */

import async from 'async'
import express from 'express'
import Tag from '../classes/tags'

let tag = new Tag()
let router = express.Router()

/*
 *@description: 获取所有的标签名
 *@author: 刘晨曦
 *@date: 2020-11-17 09:27:30
 *@version: V1.0.5
*/
router.get('/list', function (req, res, next) {
  tag.getAllTags((err, data) => {
    if (err) {
      res.json({
        code: '500',
        msg: data
      })
    }
    res.json({
      code: '0',
      msg: 'SUCCESS',
      data: data
    })
  })
})

/*
 *@description: 获取所有标签对应的数量
 *@author: 刘晨曦
 *@date: 2020-11-17 09:27:15
 *@version: V1.0.5
*/
router.get('/counts', function (req, res, next) {
  async.waterfall([
    function (callback) {
      tag.getAllTags((err, allTags) => {
        callback(err, allTags)
      })
    },
    function (allTags, callback) {
      async.eachSeries(allTags, (item, itemCallback) => {
        const params = item
        tag.getCountByTag(params, (err, data) => {
          if (err) {
            return itemCallback(err)
          }
          item.count = data
          itemCallback()
        })
      }, (err) => {
        if (err) {
          callback(true)
        } else {
          callback(null, allTags)
        }
      })
    }
  ], (err, allTags) => {
    if (err) {
      res.json({
        code: '500',
        msg: 'server is error' + err
      })
    } else {
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: allTags
      })
    }
  })
})

module.exports = router
