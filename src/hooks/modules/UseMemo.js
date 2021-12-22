import React, { Fragment, useMemo, useState } from 'react'

/**
 * useMemo() 性能优化
 * 1.useMemo() 与 useCallback() 的区别：
 *  useCallback 缓存了函数自身，useMemo 缓存了函数的返回值
 * 2.React性能优化之比较：shouldComponentUpdate vs PureComponet vs memo
 */
function UseMemo() {
  return (
    <Fragment>
      <TestMemo />
      <Parent />
    </Fragment>
  )
}

// useMemo进行性能优化
function TestMemo() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  // 点击第二个按钮也会卡顿，因为包含不必要的计算，使用useMemo改进，去掉不必要计算
  // const isEven = () => {
  //   let i = 0
  //   while (i < 1000000000) i += 1
  //   return counterOne % 2 === 0
  // }
  // 注：经过此次改进后，isEven已经由一个方法变成一个变量
  const isEven = useMemo(() => {
    let i = 0
    while (i < 1000000000) i += 1
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementOne}>counterOne:{counterOne}</button>
        {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <button onClick={incrementTwo}>counterTwo:{counterTwo}</button>
    </div>
  )
}

/**
 * shouldComponentUpdate. 接受两个参数（第一个是下一次更新的props值，第二个是下一次更新的state值）
 */
class Parent extends React.Component {
  state = {
    count: 0,
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <p>parent count is:{this.state.count}</p>
        <button onClick={this.handleAdd}>count++</button>
        <Child name="falcon" />
      </div>
    )
  }
}

class Child extends React.Component {
  // 如果不加此项判断，每次点击父组件按钮时，子组件都会rerender
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) return false
    return true
  }

  render() {
    console.log('child rerender')
    return <p>received name is： {this.props.name}</p>
  }
}

export default UseMemo
