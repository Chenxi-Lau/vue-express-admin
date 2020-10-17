/*
 * @Author: your name
 * @Date: 2020-06-23 10:05:36
 * @LastEditTime: 2020-10-12 16:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueDemo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
