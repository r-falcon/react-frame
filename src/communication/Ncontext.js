import React from 'react'
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

// 祖先组件
class Ncontext extends React.Component {
  state = {
    useName: '祖先组件',
  }

  render() {
    const { useName } = this.state
    return (
      <div>
        <p>current is: {useName}</p>
        <Provider value={useName}>
          <Parent />
        </Provider>
      </div>
    )
  }
}

// 父组件
class Parent extends React.Component {
  static contextType = MyContext //声明需要接受的context
  render() {
    return (
      <div>
        <p>Parent received is : {this.context}</p>
        <SonA />
        <SonB />
      </div>
    )
  }
}

// 子组件（类组件）
class SonA extends React.Component {
  static contextType = MyContext //声明需要接受的context
  render() {
    return (
      <div>
        <p>SonA received is:{this.context}</p>
      </div>
    )
  }
}

// 子组件（函数组件）
function SonB() {
  return (
    <div>
      <div>
        SonB received is:
        <Consumer>
          {(value) => {
            return value
          }}
        </Consumer>
      </div>
    </div>
  )
}

export default Ncontext
