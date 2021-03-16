/*
 * @Author: 刘晨曦
 * @Date: 2020-11-10 10:20:49
 * @LastEditTime: 2020-11-20 16:02:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \server\routes\template.js
 */
import express from 'express'
import Template from '../classes/Templates'

let template = new Template()
let router = express.Router()

router.get('/list', function (req, res, next) {
  const params = { id: req.query.id }
  template.getTemplatesList(params, (err, data) => {
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

router.post('/update', function (req, res, next) {
  const params = {
    id: req.body.id,
    name: req.body.name,
    content: req.body.content,
    description: req.body.description
  }
  template.updateTemplateById(params, (err, data) => {
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

router.post('/create', function (req, res, next) {
  const params = {
    name: req.body.name,
    content: req.body.content,
    description: req.body.description
  }
  template.createTemplate(params, (err, data) => {
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

router.get('/delete', function (req, res, next) {
  const params = { id: req.query.id }
  template.deleteTemplateById(params, (err, data) => {
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
