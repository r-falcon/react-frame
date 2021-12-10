import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from '../store/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   list: ['hello world', 'love and peace'],
    //   inputValue: '',
    // }
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Input
            style={{ width: '240px' }}
            placeholder="请输入待办任务"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
            onKeyUp={this.enterAdd}
          />
          <Button type="primary" onClick={this.addTodoItem}>
            提交
          </Button>
        </div>
        <List
          bordered
          style={{ width: '300px' }}
          dataSource={this.state.list}
          renderItem={(item, i) => (
            <List.Item>
              <span>{item}</span>
              <span
                style={{
                  textAlign: 'right',
                  color: 'red',
                  cursor: 'pointer',
                }}
                onClick={this.delTodoItem.bind(this, i)}
              >
                删除
              </span>
            </List.Item>
          )}
        ></List>
      </div>
    )
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  changeInputValue = (e) => {
    // this.setState({
    //   inputValue: e.target.value,
    // })
    const action = {
      type: 'change_input_value',
      value: e.target.value,
    }
    store.dispatch(action)
  }

  addTodoItem = () => {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: '',
    // })
    const action = {
      type: 'add_todo_item',
    }
    store.dispatch(action)
  }

  enterAdd = (e) => {
    if (e.keyCode === 13) {
      this.addTodoItem()
    }
  }

  delTodoItem = (index) => {
    // var list = this.state.list
    // list.splice(index, 1)
    // this.setState({
    //   list: list,
    // })
    const action = {
      type: 'del_todo_item',
      index: index,
    }
    store.dispatch(action)
  }
}

export default App
