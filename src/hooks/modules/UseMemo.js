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
      <PureParent />
      <MemoParent />
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
  /**
   * shouldComponentUpdate
   * - 用于类组件
   * - 接受两个参数（第一个是下一次更新的props值，第二个是下一次更新的state值）
   * - 在每次渲染（render）之前被调用，并根据返回值（true/false）来决定是否调用渲染函数
   * - 组件首次渲染或触发forceUpdate()不会触发该函数
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) return false
    return true
  }

  render() {
    console.log('child rerender')
    return <p>received name is： {this.props.name}</p>
  }
}

/**
 * React.PureComponent
 * - 用于类组件
 * - 类似React.Component,内置shouldComponentUpdate逻辑
 * - 需要每次传入相同的props并且渲染相同的内容
 * - 同时会对props和state变化前后的值进行浅比较，如果没发生变化，则跳过重新渲染
 * bug：
 * - 浅比较只会检测基本类型的变化；如果是复合类型，则检测不到更新，跳过重新渲染；复杂数据类型尽量使用state，state每次都返回变化后的最新值；例子中使用obj，更新后视图没有变化[数组内部发生变化，会出现数据更新，视图不更新的情况]
 * - 在组件中使用了render props 或者 类似的形式，即prop的值是一个返回某个值的函数，即使每次执行相同，每次渲染也会触发child更新。传入一个空的立即执行函数也会导致child每次都更新。[解决:立即执行函数变成箭头函数去执行]
 */

class PureParent extends React.Component {
  state = {
    count: 0,
    job: {
      occupation: 'web',
      salary: 8000,
    },
  }

  obj = {
    class: '一',
    lesson: 2,
  }

  handleLesson = () => {
    //这里lesson有更新，但是视图没有更新，child也没有进行rerender
    this.obj.lesson += 1
  }

  handleAdd = () => {
    // var salary = this.state.job.salary + 1000
    this.setState({
      count: this.state.count + 1,
      // 这里其实是发生变化的，但是没有更新
      ...this.state.job,
      // 每次改变count,child不会rerender，但是改变job，child会rerender
      // job: { ...this.state.job, salary: salary },
    })
  }

  render() {
    return (
      <div>
        <p>
          pureParent count is:{this.state.count}, job.occupation is:
          {this.state.job.occupation},job.salary is:{this.state.job.salary}
        </p>
        <button onClick={this.handleAdd}>count++</button>
        <PureChild
          name="alice"
          job={this.state.job}
          obj={this.obj}
          handleLesson={this.handleLesson}
        />
      </div>
    )
  }
}

class PureChild extends React.PureComponent {
  render() {
    console.log('pureChild rerender')
    console.log(this.props.obj)
    return (
      <div>
        <p>received name is:{this.props.name}</p>
        <p>
          received job info is. occupation：{this.props.job.occupation},
          salary：
          {this.props.job.salary}
        </p>
        <p>received obj info is. lesson：{this.props.obj.lesson} </p>
        <button onClick={this.props.handleLesson}>lesson++</button>
      </div>
    )
  }
}

/**
 * React.memo 只用于函数组件
 */
class MemoParent extends React.Component {
  state = {
    count: 0,
    job: {
      occupation: 'web',
      salary: 8000,
    },
  }

  handleAdd = () => {
    //改变不会触发child的渲染
    this.setState({
      count: this.state.count + 1,
    })
  }

  handleChange = () => {
    //改变state.job，触发子组件的渲染
    this.setState({
      job: { ...this.state.job, salary: this.state.job.salary + 1000 },
    })
  }

  render() {
    return (
      <div>
        <MemoChild job={this.state.job} handleChange={this.handleChange} />
        <p>memo parent value is.count:{this.state.count}</p>
        <button onClick={this.handleAdd}>parent count++</button>
      </div>
    )
  }
}

const MemoChild = React.memo((props) => {
  console.log('MemoChild rerender')
  console.log(props)
  return (
    <div>
      <p>
        React.memo received value is:salary:
        {props.job.salary}
      </p>
      <button onClick={props.handleChange}>child salary++</button>
    </div>
  )
})

export default UseMemo
