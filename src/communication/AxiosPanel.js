import React from 'react'
import { loginApi } from '../api/login'
class AxiosPanel extends React.Component {
  render() {
    return <button onClick={this.Login}>发送axios请求</button>
  }

  Login = () => {
    loginApi({
      username: 'admin',
      password: '123456',
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
}

export default AxiosPanel
