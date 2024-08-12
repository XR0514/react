// 统一处理请求

import { message } from "antd"
import axios from "axios"

// 创建一个 axios 实例对象
const instance = axios.create({
  baseURL: 'http://121.89.213.194:9001'
})

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token && config.url !== '/api/login') {
    config.headers.Authorization = token
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    message.error('用户信息失效，请重新登录！')
    window.location.href = '/login'
  }
  return Promise.reject(error)
})

export default instance