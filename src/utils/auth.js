import cookie from 'react-cookies'
/**
 * 存 cookie.save("key","value")
 * 取 cookie.load("key")
 * 删 cookie.remove("key")
 * 设置失效一天：
 *  let cookieTime = new Date(new Date().getTime + 24*3600*100)
 *  cookie.save("key","value",{cookieTime})
 */

export function setToken(token) {
  cookie.save('token', token)
}

export function getToken() {
  cookie.load('token')
}
