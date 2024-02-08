/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-06 12:45:24
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-06 12:56:37
 */
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue'
import type { App, Component } from 'vue';

const components: { [name: string]: Component } = { SvgIcon,Pagination };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
        console.log('app :>> ', app);
    }
  
}