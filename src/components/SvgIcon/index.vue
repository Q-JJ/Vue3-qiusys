<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-06 12:41:01
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-06 12:43:56
-->
<template>
    <div>
      <svg :style="{ width: width, height: height }">
        <use :xlink:href="prefix + name" :fill="color"></use>
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
//   接收父组件传递的参数
  defineProps({
    //xlink:href属性值的前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    //svg矢量图的名字
    name: String,
    //svg图标的颜色
    color: {
      type: String,
      default: ""
    },
    //svg宽度
    width: {
      type: String,
      default: '16px'
    },
    //svg高度
    height: {
      type: String,
      default: '16px'
    }
  
  })
  </script>
  <style scoped></style>