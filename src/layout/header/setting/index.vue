<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-11 12:35:00
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 17:40:40
-->
<template>
  <el-button type="primary" size="small" icon="Refresh" circle></el-button>
  <el-button
    type="primary"
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>
  <!-- 用户头像 -->
  <img :src="UserStore.avatar" alt="" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ UserStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="setting">
import useUserStore from '@/store/modules/user'
import {useRouter } from 'vue-router'

let UserStore = useUserStore()
let router = useRouter()
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  let full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}
// 退出登录
const logout = async () => {
  await UserStore.userLogout()
  router.push({ path: '/login'})
}
</script>

<style scoped lang="scss">
img {
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  border-radius: 50%;
}
</style>
