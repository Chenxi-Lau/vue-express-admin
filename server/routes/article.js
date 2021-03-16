/*
 * @Author: liuchenxi
 * @Date: 2020-11-02 16:10:13
 * @LastEditTime: 2020-11-11 16:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\routes\article.js
 */
import async from 'async'
import express from 'express'
import Articles from '../classes/articles'

let article = new Articles()
let router = express.Router()

router.post('/list', function (req, res, next) {
  const params = {
    status: req.body.status || '',
    userId: req.body.userId || '',
    pageNo: req.body.pageNo || 1,
    pageSize: req.body.pageSize || 10
  }
  async.waterfall([
    function (callback) {
      article.getTotal(params, (err, total) => {
        callback(err, total)
      })
    },
    function (total, callback) {
      article.getArticlesList(params, (err, list) => {
        callback(err, total, list)
      })
    }
  ], (err, total, list) => {
    if (err) {
      res.json({
        code: '500',
        msg: 'server is error' + err
      })
    } else {
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: {
          total: total,
          list: list
        }
      })
    }
  })
})

router.post('/detail', function (req, res, next) {
  const params = { id: req.body.id }
  article.getArticleById(params, (err, data) => {
    if (err) {
      res.json({
        code: '500',
        msg: data
      })
    }
    res.json({
      code: '0',
      msg: 'SUCCESS',
      data: data[0]
    })
  })
})

router.post('/publish', function (req, res, next) {
  const params = {
    userId: req.body.userId,
    title: req.body.title,
    markdown: req.body.markdown,
    status: req.body.status,
    metaTitle: req.body.metaTitle,
    metaDescription: req.body.metaDescription,
    tagName: req.body.tagName
  }
  article.publishArticle(params, (err, data) => {
    if (err) {
      res.json({
        code: '500',
        msg: data
      })
    }
    res.json({
      code: '0',
      msg: 'SUCCESS',
      data: '新建成功'
    })
  })
})

router.post('/deleteById', function (req, res, next) {
  const params = { id: req.body.id }
  article.deleteArticleById(params, (err, data) => {
    if (err) {
      res.json({
        code: '500',
        msg: data
      })
    }
    res.json({
      code: '0',
      msg: 'SUCCESS',
      data: '删除成功'
    })
  })
})

router.post('/update', function (req, res, next) {
  const params = {
    id: req.body.id,
    title: req.body.title,
    status: req.body.status,
    metaTitle: req.body.metaTitle,
    metaDescription: req.body.metaDescription,
    tagName: req.body.tagName,
    markdown: req.body.markdown
  }
  article.updateArticleById(params, (err, data) => {
    if (err) {
      res.json({
        code: '500',
        msg: data
      })
    }
    res.json({
      code: '0',
      msg: 'SUCCESS',
      data: '更新成功'
    })
  })
})

router.get('/monthOrDayCount', function (req, res, next) {
  const params = {
    type: req.query.type
  }
  article.queryCountByMonthOrDay(params, (err, data) => {
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

module.exports = router
