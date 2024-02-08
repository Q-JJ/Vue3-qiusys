/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-06 23:05:13
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-06 23:05:58
 */
// 常量路由
export const constantRoute = [
    {
      // 登录
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'layout',
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:'/404',
      name: 'any',
    },
  ]