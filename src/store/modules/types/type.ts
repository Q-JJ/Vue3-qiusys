/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-07 18:47:12
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-11 15:57:27
 */
// 定义仓库state 类型

import { RouteRecordRaw } from "vue-router"

export interface UserState{
    token:string | null
    menuRoutes:RouteRecordRaw[]
    username:string
    avatar:string
}