import axios from 'axios'
import { message } from 'antd'
import constants from '@/constants'
import { loadingPublisher } from '@/utils/subscribe'
const { USER_INFO } = constants

const JWT_KEY = 'x-cbc-token'

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000,
  headers: {}
})

/**
 * @description 设置header请求头
 * @param {Object} request
 * @returns {Object} request
 */
function setHeader(request) {
  // const token = JSON.parse(localStorage.getItem(USER_INFO))?.JwtToken
  // if (token) {
  //   request.headers[JWT_KEY] = token
  // }
  request.url.includes('?') ? (request.url += `&t=${Date.now()}`) : (request.url += `?t=${Date.now()}`)

  return request
}

/**
 * @description 返回错误处理
 * @param {Object} res 错误信息
 */
function resError(data) {
  const { Code, Msg } = data

  if (Code !== 0) {
    message.error(Msg)
  }
}

// 请求拦截
instance.interceptors.request.use((request) => {
  request = setHeader(request)
  loadingPublisher.add();
  return request
}, err => Promise.reject(err))


// 返回拦截
instance.interceptors.response.use((response) => {
  resError(response.data)
  response &&  loadingPublisher.sub();
  return response.data
}, err => {
   loadingPublisher.sub();
  if (err?.message.includes('timeout')) {
    message.error('timeout')
    return
  }
  const { status, data } = err.response
  switch (status) {
    case 401:
      // message.error('Not logged in')
      // localStorage.clear()
      // location.href = process.env.LOG_IN
      break;
    case 403:
      message.error('No Permission')
      break;
    case 400:
      message.error(data.Msg)
      break;
    case 500:
      message.error('Server Error')
      break;
    default:
      message.error('Unknown Mistake')
      break;
  }

  return Promise.reject(err)
})

const instanceUser = axios.create({
  baseURL: 'https://apis.newegg.org',
  timeout: 10000,
})

/**
 * @description 返回axios的实例，这里可以支持多个实例的方法，可以配置不同域名的请求实例
 */
const Axios = {
  get: (url, params) => instance.get(url, { params }),
  post: (url, data, option) => instance.post(url, data, option),
  put: (url, data) => instance.put(url, data),
  delete: (url, data) => instance.delete(url, data),
}

export default Axios

export const AxiosUser = {
  get: (url, params) => instanceUser.get(url, { params })
}
