<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 18:48:39
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 17:41:58
-->
<template>
  <el-menu
    background-color="#001529"
    text-color="white"
    :default-active="onRoutes"
    router
    :collapse="SidebarStore.collapse"
  >
    <Menu :menuList="userStore.menuRoutes"></Menu>
  </el-menu>
</template>

<script setup lang="ts" name="sidebar">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Menu from './menu.vue'
import useUserStore from '@/store/modules/user'
import useSidebarStore from '@/store/modules/sidebar'

let userStore = useUserStore()
let SidebarStore = useSidebarStore()

let route = useRoute()
const onRoutes = computed(() => {
  return route.path
})
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
