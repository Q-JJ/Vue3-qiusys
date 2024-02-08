/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-07 00:27:28
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-07 01:06:15
 */
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { setToken, getToken } from '@/utils/token'
import type {UserState} from './types/type'

let useUserStore = defineStore('User', {
  // 函数返回的数据类型为UserState
  state: ():UserState => {
    return {
      token: getToken(),
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      let res:loginResponseData = await reqLogin(data)
      if (res.code == 200) {
        this.token = res.data.token as string
        setToken(res.data.token as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      }else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
