/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-07 00:27:28
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-12 17:43:19
 */
import { defineStore } from 'pinia'
import { reqLogin,reqUserInfo } from '@/api/user'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { setToken, getToken,removeToken } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  // 函数返回的数据类型为UserState
  state: (): UserState => {
    return {
      token: getToken(),
      // 存储生成菜单
      menuRoutes: constantRoute,
      username:'',
      avatar:''
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      let res: loginResponseData = await reqLogin(data)
      if (res.code == 200) {
        this.token = res.data.token as string
        setToken(res.data.token as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },

    async userInfo(){
      let res = await reqUserInfo()
      if(res.code == 200){
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
      }else{
        return Promise.reject(new Error(res.message))
      }
    },
     userLogout(){
      this.token = '',
      this.username='',
      this.avatar=''
      removeToken()
    }
  },
  getters: {},
})

export default useUserStore
