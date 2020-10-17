/*
 * @Author: liuchenxi
 * @Date: 2020-06-23 10:05:36
 * @LastEditTime: 2020-10-17 10:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueDemo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import routerConfig from '../router.config.js'

Vue.use(Router)

const createRoute = (router) => {
  return router.reduce((preRouters, curRouter) => {
    preRouters.push(processRouteObj(curRouter))
    return preRouters
  }, [])
}

const processRouteObj = ({ component, children, ...args }) => {
  return Object.assign({
    component: () => import(`@/pages/${component}`),
    children: children ? createRoute(children) : []
  }, args)
}

console.log(createRoute(routerConfig))
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: createRoute(routerConfig)
})
