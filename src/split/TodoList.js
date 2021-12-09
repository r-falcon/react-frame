import React, { Component, Fragment } from 'react'
import InputItem from './InputItem'
import TodoItem from './TodoItem'

/**
 * 组件拆分：
 * 父子组件传值：
 * 1.父传子：
 *  父组件自定义传值属性
 *  子组件通过this.props.属性名接受
 * 2.子传父：
 *  在子组件中调用父组件的方法。父组件传递方法：this.方法名.bind(this),子组件调用this.props.方法名
 */

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['hello world', 'love and peace'],
    }
  }

  render() {
    return (
      <Fragment>
        <InputItem
          input_value={this.state.inputValue}
          changeValue={this.changeInputValue.bind(this)}
          addItem={this.doAddTodoItem.bind(this)}
          enterAdd={this.enterAdd.bind(this)}
        />
        <TodoItem
          todo_items={this.state.list}
          deleteItem={this.deleteTodoItem.bind(this)}
        />
      </Fragment>
    )
  }

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  doAddTodoItem = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }

  enterAdd = (e) => {
    if (e.keyCode === 13) {
      this.doAddTodoItem()
    }
  }

  deleteTodoItem = (index) => {
    var list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list,
    })
  }
}

export default TodoList
