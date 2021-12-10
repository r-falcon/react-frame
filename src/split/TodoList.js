import React, { Component, Fragment } from 'react'
import InputItem from './InputItem'
import TodoItem from './TodoItem'
import Greeting from './Greeting'
import RefDemo from './RefDemo'

/**
 * 组件拆分：
 * 父子组件传值：
 * 1.父传子：
 *  父组件自定义传值属性
 *  子组件通过this.props.属性名接受
 * 2.子传父：
 *  在子组件中调用父组件的方法。父组件传递方法：this.方法名.bind(this),子组件调用this.props.方法名
 */

/**
 * 在不考虑redux，flux等状态管理框架的时候,父子组件的通信用的就是案例所示方法，子组件不能修改父组件中的值，而要通过调用父组件的方法在父组件中完成修改
 */

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['hello world', 'love and peace'],
      name: 'falcon',
      number: 20,
    }
  }

  render() {
    return (
      <Fragment>
        <RefDemo></RefDemo>
        <Greeting
          number={this.state.number}
          increment={this.increment.bind(this)}
        />
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

  increment = () => {
    // react有保护机制，不允许直接修改state的值
    let count = this.state.number
    count++
    this.setState({
      number: count,
    })
  }
}

export default TodoList
