/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-06 16:58:16
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-07 18:46:42
 */
//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginFormData {
  username: string
  password: string
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  token?:string
  code: number
  message?: string
  ok: boolean
}

//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data:{
    message?:string
    token?:string
  }
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
