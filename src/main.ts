/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-06 11:35:02
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 13:20:59
 */
/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-06 11:35:02
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-06 11:37:50
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
// svg插件配置
import 'virtual:svg-icons-register'
// 引入自定义全局组件
import gloablComponent from './components/index'

import router from './router'
import pinia from './store'
import './permisstion'

const app = createApp(App)

// element 中文
app.use(ElementPlus, {
  locale: zhCn,
})
// element icon
// 注册elementplus图标 https://element-plus.org/zh-CN/component/icon.html#%E6%B3%A8%E5%86%8C%E6%89%80%E6%9C%89%E5%9B%BE%E6%A0%87
// 使用 el-icon 为 SVG 图标提供属性或者直接使用svg
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// console.log(import.meta.env);

// 安装插件
app.use(gloablComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
