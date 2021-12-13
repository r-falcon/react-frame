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
      messageBox: ['hello world', 'love and peace'],
    }
  }

  render() {
    // // 与（&&）运算符
    // if (this.state.isLogin) {
    //   return (
    //     <div>
    //       <Login />
    //       {this.state.messageBox.length > 0 && (
    //         <span>有消息：{this.state.messageBox.join(',')}</span>
    //       )}
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <NotLogin />
    //     </div>
    //   )
    // }

    // 三目运算符
    return <div>{this.state.isLogin ? <Login /> : <NotLogin />}</div>

    // 组织组件渲染
    // return <div>{this.state.isLogin ? <Login /> : null}</div>
  }
}

export default FactorRender
