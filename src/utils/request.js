/**
 * 配置axios封装请求方法
 */
import axios from 'axios'
import { getToken } from './auth'

const service = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

// 请求发出前拦截
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 请求响应拦截
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
