import React from 'react'
import { loginApi } from '../api/login'
// import axios from 'axios'

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
    // axios
    //   .post(
    //     `http://127.0.0.1:8888/api/private/v1/login?username=admin&password=123456`
    //   )
    //   .then((res) => {
    //     console.log(res)
    //   })
  }
}

export default AxiosPanel
