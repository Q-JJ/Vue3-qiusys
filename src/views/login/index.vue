<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2024-02-06 22:56:16
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-08 11:28:08
-->
<template>
  <div class="login_container">
    <section class="form_contianer">
      <div class="titleArea">
        <img class="logo" :src="logo" alt="湫的知识海洋" />
        <span class="title">湫的知识海洋</span>
      </div>
      <el-form
        ref="loginForms"
        class="loginForm"
        status-icon
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item prop="username" class="login-item">
          <el-input
            class="area"
            type="text"
            placeholder="用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="login-item">
          <el-input
            class="area"
            type="password"
            placeholder="密码"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/images/cat.png'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { getTime } from '@/utils/time'

// 登录信息类型接口
interface loginInfo {
  username: string
  password: string
}
// user仓库
let useStore = useUserStore()
// 路由跳转
let router = useRouter()
//获取el-form组件，用于表单校验
let loginForms = ref()
// 表单数据
let loginForm = reactive<loginInfo>({ username: 'admin', password: '111111' })

// 登录逻辑
const login = async () => {
  // 先校验表单数据，若不符合规则不发送请求。
  await loginForms.value.validate()
  try {
    await useStore.userLogin(loginForm)
    router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`,
    })
    //登录成功加载效果也消失
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

//表单用户名规则
//#region
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
// 表单密码规则
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}
// 表单规则
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [{ trigger: 'change', validator: validatorUserName }],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
//#endregion
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/bg.jpg') center center;
  background-blend-mode: multiply;
  background-size: cover;

  .form_contianer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.6);
    width: 370px;
    border-radius: 5px;
    padding: 25px;
    text-align: center;
    .titleArea {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 22px;
      width: 100%;
      padding-bottom: 20px;
      .logo {
        width: 60px;
        margin-right: 10px;
      }
      .title {
        i {
          color: #2a8cc3;
        }
      }
    }

    .loginForm {
      .submit_btn {
        width: 100%;
        padding: 13px 0;
        font-size: 16px;
      }
      .el-button--primary {
        background-color: #2a8cc3;
        border: 1px solid #2a8cc3;
      }
    }
  }
}
</style>
