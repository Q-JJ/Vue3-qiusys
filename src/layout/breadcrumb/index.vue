<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-11 12:32:17
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 17:39:02
-->
<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon :size="12">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示匹配路由的标题 -->
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="breadcrumb">

import { useRoute } from 'vue-router'

let route = useRoute()
</script>

<style scoped lang="scss">

span{
  margin-left:2px
}

</style>
