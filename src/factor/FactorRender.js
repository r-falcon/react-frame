import React from 'react'

/**
 * 条件渲染
 */

function Login() {
  return <div>You are logined, welcome</div>
}

function NotLogin() {
  return <div>You are not logined, please do it</div>
}

class FactorRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
    }
  }

  render() {
    if (this.state.isLogin) {
      return <Login />
    } else {
      return <NotLogin />
    }
  }
}

export default FactorRender
