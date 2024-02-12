<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-08 17:22:57
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 20:28:04
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-08 17:22:57
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-11 12:33:52
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 18:48:39
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-11 12:18:54
-->
<template>
  <div class="header">
    <div class="left">
      <el-icon style="margin-right: 10px" @click="chageCollapse">
        <component :is="SidebarStore.collapse ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts" name="header">
import useSidebarStore from '@/store/modules/sidebar'
import Setting from './setting/index.vue'

let SidebarStore = useSidebarStore()

// 侧边栏折叠
const chageCollapse = () => {
  SidebarStore.handleCollapse()
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(251, 248, 248),
    rgb(222, 217, 217),
    rgb(186, 185, 185)
  );
  .left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .right {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
