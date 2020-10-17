<!--
 * @Author: your name
 * @Date: 2020-06-23 10:05:36
 * @LastEditTime: 2020-10-16 16:42:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueDemo\src\App.vue
-->
<template>
  <div id="app">
    <nav-menu @handleCollapse='handleCollapse' />
    <div class='content' :style='{"margin-left":isCollapse?"64px":"180px"}'>
      <router-view />
    </div>
  </div>
</template>

<script>
import navMenu from '@/components/navMenu'
export default {
  name: 'App',
  components: {
    navMenu
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleCollapse (val) {
      this.isCollapse = val
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  height: 100%;
  .content {
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }
}
</style>

