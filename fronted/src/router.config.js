/*
 * @Author: your name
 * @Date: 2020-10-16 16:24:57
 * @LastEditTime: 2020-10-17 10:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-admin\src\router.config.js
 */
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: 'index'
  },
  {
    name: 'markdown',
    path: '/markdown',
    component: 'markdown'
  }
]
