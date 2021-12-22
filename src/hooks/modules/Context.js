import React from 'react'

const InfoContext = React.createContext()
const { Provider, Consumer } = InfoContext

class Context extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: 'alice',
        age: 21,
      },
    }
  }

  handleUser = () => {
    this.setState({
      userInfo: { ...this.state.userInfo, name: 'falcon' },
    })
  }

  handleAge = () => {
    this.setState({
      userInfo: { ...this.state.userInfo, age: 16 },
    })
  }

  render() {
    return (
      // provider 提供的value只能是单个值，不能传递对象，接受的时候遵从就近原则
      <Provider value={this.state.userInfo.name}>
        <ChangeInfo handleUser={this.handleUser} />
        <Provider value={this.state.userInfo.age}>
          <FuncInfo handleAge={this.handleAge} />
        </Provider>
      </Provider>
    )
  }
}

// 类组件接受context需要利用contextType提前声明接受哪个context,然后通过this.context调用
class ChangeInfo extends React.Component {
  static contextType = InfoContext
  render() {
    console.log(this.context)
    return (
      <div>
        <p>not useContext. class current info.name is:{this.context}</p>
        <button onClick={this.props.handleUser}>change user</button>
      </div>
    )
  }
}

// 函数组件接受Context,利用Consumer接受并渲染
function FuncInfo(props) {
  console.log(props)
  return (
    <Consumer>
      {(value) => {
        return (
          <div>
            <p>not useContext. function current info.name is:{value}</p>
            <button onClick={props.handleAge}>change age</button>
          </div>
        )
      }}
    </Consumer>
  )
}

export default Context
