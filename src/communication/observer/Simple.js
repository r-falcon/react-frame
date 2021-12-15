import React, { Fragment } from 'react'

/**
 * new CustomEvent() 创建事件
 * dispatchEvent() 发起事件
 * addEventListener() 监听事件
 * removeEventListener() 移除事件
 */

class ComponentA extends React.Component {
  state = {
    info: '',
  }

  componentDidMount() {
    document.addEventListener('myEvent', this.handleEvent)
  }
  componentWillUnmount() {
    document.removeEventListener('myEvent', this.handleEvent)
  }

  handleEvent = (e) => {
    console.log(e.detail.log) //i'm zach
    this.setState({
      info: e.detail.log,
    })
  }

  render() {
    return <div>received info is: {this.state.info}</div>
  }
}

class ComponentB extends React.Component {
  sendEvent = () => {
    document.dispatchEvent(
      new CustomEvent('myEvent', {
        detail: {
          log: "i'm zach",
        },
      })
    )
  }

  render() {
    return <button onClick={this.sendEvent}>Send</button>
  }
}

class Simple extends React.Component {
  render() {
    return (
      <Fragment>
        <ComponentA />
        <ComponentB />
      </Fragment>
    )
  }
}

export default Simple
