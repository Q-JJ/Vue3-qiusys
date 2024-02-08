/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2024-02-06 16:29:40
 * @LastEditors: JnannJ
 * @LastEditTime: 2024-02-07 18:57:51
 */
//封装一个函数:获取一个结果:当前早上|上午|下午|晚上
export const getTime = () => {
  let message = ''
  //通过内置构造函数Date
  const hours = new Date().getHours()
  //情况的判断
  message =
    hours <= 9 ? '早上' : hours <= 12 ? '上午' : hours < 18 ? '下午' : '晚上'

  return message
}
