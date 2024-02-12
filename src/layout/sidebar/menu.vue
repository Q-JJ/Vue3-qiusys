<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-08 18:04:06
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-11 13:45:20
-->
<template>
  <!-- 遍历所有menuList -->
  <template v-for="item in menuList" :key="item.path">
    <!-- 如果路由存在子路由 且 子路由只有一个children -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
      >
        <!-- 图标放在插槽外，不然折叠功能 图标会不显示 -->
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>

        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 如果子路由不止一个，则进行循环遍历 -->
    <el-sub-menu
      :index="item.path"
      :key="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        <span>
          {{ item.meta.title }}
        </span>
      </template>
      <template v-for="subItem in item.children">
        <el-sub-menu
          v-if="subItem.children"
          :index="subItem.path"
          :key="subItem.path"
        >
          <template #title>{{ subItem.meta.title }}</template>
          <!-- 如果子路由还有它的子路由（3级路由）无限套娃 -->
          <el-menu-item
            v-for="threeItem in subItem.children"
            :key="threeItem.path"
            :index="threeItem.path"
          >
            {{ threeItem.meta.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="subItem.path">
          <template #title>
            <el-icon><component :is="subItem.meta.icon"></component></el-icon>
            <span>
              {{ subItem.meta.title }}
            </span>
          </template>
        </el-menu-item>
      </template>
    </el-sub-menu>
    <!-- 如果路由没有children 直接生成 -->
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
        :key="item.path"
        v-if="!item.meta.hidden"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
// 获取父组件的menuList
defineProps(['menuList'])
</script>

<style scoped lang="scss">
</style>
