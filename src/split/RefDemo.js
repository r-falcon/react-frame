import React, { Component, Fragment } from 'react'

/**
 * ref的两种用法
 * 因为setState是异步函数，操作dom可以在它的回调内执行
 */

class RefDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  render() {
    return (
      <Fragment>
        {/* <input
          ref="input"
          type="text"
          value={this.state.inputValue}
          onChange={this.changeInputValue}
        /> */}
        <input
          ref={(input) => (this.input = input)}
          type="text"
          value={this.state.inputValue}
          onChange={this.changeInputValue}
        />
        <p>{this.state.inputValue}</p>
      </Fragment>
    )
  }

  changeInputValue = () => {
    this.setState({
      // 利用ref,e.target.value被取代
      // inputValue: this.refs.input.value,
      inputValue: this.input.value,
    })
  }
}

export default RefDemo
