import React from 'react'

/**
 * React API
 *  setState()、replaceState()[会删除原state]
 *  setProps()、replaceProps()[会删除原props]
 *  forceUpdate()[强制更新，适用于this.props 和 this.state 之外的组件重绘]
 *  findDOMNode()获取DOM节点
 *  isMounted()判断组件挂载状态
 *  当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用，根据返回的结果判断是否执行更新
 */

class ApiPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 为了提升性能，setState()并不会立即改变this.state,会批量执行state和dom渲染
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击它</button>
        <LifeCircle number={this.state.count} />
      </div>
    )
  }

  handleClick = () => {
    var number = this.state.count
    number++
    this.setState({
      count: number,
    })
  }
}

class LifeCircle extends React.Component {
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(newProps, newState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return <div>点击次数为； {this.props.number}</div>
  }
}

export default ApiPanel
