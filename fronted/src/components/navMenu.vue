<!--
 * @Author: your name
 * @Date: 2020-07-10 10:23:03
 * @LastEditTime: 2020-10-17 10:19:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueDemo\src\components\navMenu.vue
-->
<template>
  <div class="nav">
    <el-menu default-active="map" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" :router='true'>
      <el-button icon='el-icon-s-unfold' @click="handleCollapse"></el-button>
      <el-menu-item v-for="(item, index) in navLists" :key="index" :index="item.router">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import navConfig from '@/nav.config.js'
export default {
  data () {
    return {
      isCollapse: true,
      navLists: navConfig
    }
  },
  methods: {
    handleCollapse () {
      this.isCollapse = !this.isCollapse
      this.$emit('handleCollapse', this.isCollapse)
    }
  }
}
</script>

<style lang='less' scoped>
.nav {
  height: 100%;
  position: absolute;
  .el-menu-vertical-demo {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
  }
}
.nav /deep/ .el-button {
  width: 100%;
  height: 56px;
  background: #545c64;
  border: 1px solid #545c64;
  color: #909399;
  text-align: left;
  padding-left: 24px;
  &:hover {
    background: rgb(67, 74, 80);
  }
}
</style>
