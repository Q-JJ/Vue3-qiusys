import router from '@/router'
//引入进度条样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from './store/modules/user'
// import pinia from './store'
// const UserStore = useUserStore(pinia)
nprogress.configure({ showSpinner: false })

// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数
  const UserStore = useUserStore()
  nprogress.start()
  //获取token,去判断用户登录、还是未登录
  const token = UserStore.token
  const username = UserStore.username

  if (token) {
    // token存在，若跳转到登录页面，则next到首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
        try {
          await UserStore.userInfo()
          next({ ...to })
        } catch (err) {
          await UserStore.userLogout()
          next({ path: '/login' })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

// 全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
  nprogress.done()
  document.title = `${to.meta.title}`

})
