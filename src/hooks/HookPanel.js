import React, { Fragment, useState } from 'react'
import RenderProps from './RenderProps'
import ChildrenProps from './ChildrenProps'
import HOC from './HOC'
import State from './modules/State'
import UseState from './modules/UseState'
// import Effect from './modules/Effect'
import UseEffect from './modules/UseEffect'
import Context from './modules/Context'
import UseContext from './modules/UseContext'
import UseReducer from './modules/UseReducer'
import UseCallback from './modules/UseCallbak'
import UseMemo from './modules/UseMemo'
import UseRef from './modules/UseRef'

/**
 * Hooks
 * 无状态组件（Function），无生命周期、无this、无state。当写成一个简单完美的函数组件时，因需求变动需要该组件有自己的state，则必须要很麻烦的将function换成class
 * 状态组件（Class）,有生命周期，有this，有state。在使用的过程中经常会用到忘记绑定this的bug
 * 想要复用一个状态组件：渲染属性（render props）[this.props.children。注：props可以传递任何对象，包括组件和函数]、高阶组件（higher-order-components）[参数为组件，返回值为新组件的函数]
 * Hooks 与 Mixins 区别：
 * - Mixins机制是让多个mixins共享一个对象的数据空间，依赖容易发生冲突
 * - hook写在function而非class，每一个hook函数都相互独立
 * 【注】必须把hooks写在函数的最外层，不能写在if-else语句中，确保hooks执行顺序的一致性
 */

/**
 * 1.只能在顶层作用域调用。不能在内部的循环、条件判断、嵌套的方法中使用
 * 2.只能在React Function中使用hooks，不能在普通函数
 */

/**
 * State Hooks
 *  useState()
 *  [注]this.setState()是合并状态后返回一个新的状态；useState()是直接替换掉老状态返回新状态；useState()无论调用多少次，相互之间是独立的
 */
// 声明一个状态变量
// import { useState } from 'react'
// function Example() {
//   const [count, setCount] = useState(0)
// }

// 如果一个组件有多个状态值
// const [age, setAge] = useState(42)
// const [fruit, setFruit] = useState('banana')
// const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

// 读取状态值
{
  /* <p>You clicked {count} times</p> */
}

// 更新状态
{
  /* <button onClick={() => setCount(count + 1)}>Click me</button> */
}

/**
 * Effect Hooks
 * useEffect()
 * 在生命周期钩子里需要完成很多事情，发起ajax请求，定时器，监听事件的注册和取消注册等等，需要写在生命周期钩子函数中[componentDidMount、componentDidUpdate、componentWillUnmount],会产生副作用
 * useEffect是生命周期钩子函数的集合体。不同的是useEffect是异步执行的，而生命周期钩子函数是同步执行的
 * useEffect怎么解绑一些副作用。普通的在componentDidMount添加后，在componentWillUnmount需要取消注册；useEffect返回一个新的函数即可，这个新的函数会在下一次组件渲染之后执行。不同的是，ummount是一次性的，而返回的函数每次渲染都会执行一次[每次都渲染的好处，之前的改变需要添加update，取消之前的在重新注册;而useEffect每次更新都会重新渲染一次，替换更新]
 * 未避免一旦修改，所有的都重新执行渲染，避免不必要的副作用函数 - 传入第二个参数，只有参数对应的值修改时，才触发执行[当第二个参数传入空数组时，相当于只在首次渲染时执行（会有bug，componentDidMount加componentWillUnmount的模式）]
 */
// 基本使用
// function Example() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     document.title = `You clicked ${count} times`
//   })
// }

// 跳过一些不必要的执行函数
// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]); // 只有当count的值发生变化时，才会重新执行`document.title`这一句

class HookPanel extends React.Component {
  render() {
    return (
      <Fragment>
        <RenderProps />
        <div>------------------------------------------------------</div>
        <ChildrenProps />
        <div>------------------------------------------------------</div>
        <HOC />
        <div>------------------------------------------------------</div>
        <State />
        <div>------------------------------------------------------</div>
        <UseState />
        <div>------------------------------------------------------</div>
        {/* <Effect /> */}
        <div>------------------------------------------------------</div>
        <UseEffect />
        <div>------------------------------------------------------</div>
        <Context />
        <div>------------------------------------------------------</div>
        <UseContext />
        <div>------------------------------------------------------</div>
        <UseReducer />
        <div>------------------------------------------------------</div>
        <UseCallback />
        <div>------------------------------------------------------</div>
        <UseMemo />
        <div>------------------------------------------------------</div>
        <UseRef />
      </Fragment>
    )
  }
}

export default HookPanel
