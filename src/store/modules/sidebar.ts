/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-08 23:28:54
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-11 14:04:57
 */
//小仓库:layout组件相关配置仓库
import { defineStore } from 'pinia'

const sidebarStore = defineStore('SidebarStore', {
  state: () => ({
    collapse: false, //用户控制菜单折叠还是收起控制
  }),

  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
  },
})
export default sidebarStore
