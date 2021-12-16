import request from '../utils/request'

export function loginApi(data) {
  return request({
    url: 'api/private/v1/login',
    method: 'post',
    data: data,
  })
}
