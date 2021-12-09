import React, { Fragment } from 'react'
const Component = React.Component

/**
 * 数据绑定、事件绑定：
 *  1.state写在class的构造函数中进行数据绑定【类被加载时，构造函数自动执行，无需手动调用】
 *  2.表单控件只绑定value属性会报错，将呈现只读字段。设置readonly或者添加onChange事件解决报错
 *  3.在render函数外定义只读方法，通过e.target.value获取input控件中的值
 *  4.！！！不允许对状态state直接进行修改，通过this.setState修改
 *  5.！！！this指向有问题，保证上下文一致:解决，构造函数bind(this),绑定函数本身bind(this),函数写成箭头函数【推荐】
 *  6.响应式：不直接操作DOM，通过数据劫持的方式，以数据驱动视图
 */

/**
 * 列表渲染：
 * key：
 *  1.react基于虚拟DOM,涉及diff算法。虚拟dom会创建两个js对象，用于前后对比，两个对象的依赖靠索引建立，一旦索引改变，依赖需重新建立，设置唯一标志key，提高性能
 */

/**
 * 添加事务、键盘监听【敲击回车实现】、删除事务
 */

/**
 * 组件合并整体写一个功能
 */
class TodoList extends Component {
  constructor(props) {
    // 调用父类的构造函数，官方推荐
    super(props)
    this.state = {
      inputValue: '',
      list: ['hello world', 'love and peace'],
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
            onKeyUp={this.enterAdd}
          />
          <button onClick={this.addTodoList}>添加</button>
          <div>{this.state.inputValue}</div>
        </div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <span
                style={{ color: 'red', marginLeft: '20px', cursor: 'pointer' }}
                onClick={this.deleteTodoItem.bind(this, index)}
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  addTodoList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }

  enterAdd = (e) => {
    if (e.keyCode === 13) {
      this.addTodoList()
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
