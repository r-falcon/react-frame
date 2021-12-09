import React, { Component } from 'react'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ul>
        {this.props.todo_items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <span
              style={{ color: 'red', marginLeft: '20px', cursor: 'pointer' }}
              onClick={this.handleDelete.bind(this, index)}
            >
              删除
            </span>
          </li>
        ))}
      </ul>
    )
  }

  handleDelete = (index) => {
    this.props.deleteItem(index)
  }
}

export default TodoItem
