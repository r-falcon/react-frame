import React, { Component } from 'react'

class InputItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.input_value}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
        />
        <button onClick={this.handleAdd}>添加</button>
      </div>
    )
  }

  handleChange = (e) => {
    this.props.changeValue(e)
  }

  handleAdd = () => {
    this.props.addItem()
  }

  handleEnter = (e) => {
    this.props.enterAdd(e)
  }
}

export default InputItem
