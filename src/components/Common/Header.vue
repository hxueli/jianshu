<template>
  <el-menu theme="dark" :default-active="activeIndex"
           class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <router-link id="Home" to="/">
      <el-menu-item class="NavLeft" index="1">首页</el-menu-item>
    </router-link>
    <span class="NavRight">
    <router-link id="Download" to="/Download">
    <el-menu-item index="2">下载APP</el-menu-item>
    </router-link>
          <router-link id="SignIn" to="/SignIn">
    <el-menu-item index="4">登录</el-menu-item>
          </router-link>
          <router-link id="SignUp" to="/SignUp">
    <el-menu-item index="5">注册</el-menu-item>
          </router-link>
          <router-link id="Write" to="/Write">
    <el-menu-item index="5">写文章</el-menu-item>
          </router-link>
      </span>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  .NavRight {float: right;}
  .NavLeft {font-size: large;}
</style>
