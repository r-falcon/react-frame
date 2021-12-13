import React, { Component } from 'react'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      /**
       * key最好是在这个元素列表中独一无二的字符串；如果列表可以重新排序，不建议使用索引来进行排序，会导致渲染变慢
       * 在map内部调用元素时，要随时记得为每一个元素添加独一无二的key；如果map嵌套了太多层，可以提取出组件
       * key值不会传递给组件，如果需要传递组件key值，将key值作为属性进行传递
       */
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
