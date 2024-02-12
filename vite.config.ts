/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-06 11:35:02
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 17:38:31
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import path from 'path'
// svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig(({command}) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
      // 组件命名插件
      VueSetupExtend()
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
