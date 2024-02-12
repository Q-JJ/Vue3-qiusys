<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-08 11:58:55
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 20:23:18
-->
<template>
  <div class="container">
    <!-- 侧边栏 -->
    <div class="slider" :class="{ fold: SidebarStore.collapse }">
      <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="" />
        <p v-show="!SidebarStore.collapse">{{ setting.title }}</p>
      </div>

      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <Sidebar></Sidebar>
      </el-scrollbar>
    </div>

    <!-- 顶部栏 -->
    <div class="tabbar" :class="{ fold: SidebarStore.collapse }">
      <Header></Header>
    </div>

    <!-- 功能区 -->
    <div class="main" :class="{ fold: SidebarStore.collapse }">
      <Breadcrumb/>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="layout">
import Sidebar from './sidebar/index.vue'
import Header from './header/index.vue'
import useSidebarStore from '@/store/modules/sidebar'
import Breadcrumb from './breadcrumb/index.vue'
import { reactive } from 'vue'

let SidebarStore = useSidebarStore()
let setting = reactive({
  title: '湫的知识海洋', //项目的标题
  logo: '/logo.png', //项目logo设置
  logoHidden: true,
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  .slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }
  .tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .main {
    background-color: 	#F5F5F5;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding:10px 20px 20px 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: $base-logo-title-fontSize;
  }
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s ;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
