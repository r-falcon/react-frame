import React, { Fragment, useReducer, useContext } from 'react'

/**
 * useReducer是用于状态管理的api，是useState的替代方案
 * 区别：useState是useReducer构建的
 * 组件内部使用useReducer: simple state、complex state
 * 组件之间使用state，完成全局的状态管理：useReducer + useContext[useReducer在根节点创建一个counter，useContext为子组件提供和消费context]
 */

function UseReducer() {
  return (
    <Fragment>
      <SimpleDemo />
      <ComplexDemo />
      <RepeatDemo />
      <App />
    </Fragment>
  )
}

/**
 * simple state & action
 */

const simpleInitialState = 0
const simpleReducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return simpleInitialState
    default:
      return state
  }
}
function SimpleDemo() {
  const [count, dispatch] = useReducer(simpleReducer, simpleInitialState)

  return (
    <div>
      <p>simple state and action. current value is:{count}</p>
      <button onClick={() => dispatch('increment')}>count++</button>
      <button onClick={() => dispatch('decrement')}>count--</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

/**
 * complex state & action
 * 在complexReducer声明部分，最好用ts更直观
 */
const complexInitialState = {
  firstNumber: 0,
  secondNumber: 10,
}
const complexReducer = (
  state = complexInitialState,
  action = { type: '', value: 0 }
) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstNumber: state.firstNumber + action.value }
    case 'increment2':
      return { ...state, secondNumber: state.secondNumber + action.value }
    case 'decrement1':
      return { ...state, firstNumber: state.firstNumber - action.value }
    case 'decrement2':
      return { ...state, secondNumber: state.secondNumber - action.value }
    case 'reset':
      return complexInitialState
    default:
      return state
  }
}
function ComplexDemo() {
  const [count, dispatch] = useReducer(complexReducer, complexInitialState)

  return (
    <div>
      <p>
        complex state and action.current value is.first:{count.firstNumber}
        ,second:{count.secondNumber}
      </p>
      <button onClick={() => dispatch({ type: 'increment1', value: 3 })}>
        first+3
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>
        second-5
      </button>
      <button onClick={() => dispatch({ type: 'reset', value: 0 })}>
        reset
      </button>
    </div>
  )
}

/**
 * multiple Reducers
 * 如果有多个 state，但 state 变化的方式又是相同的时候，可以多次使用 useReducer
 */
function RepeatDemo() {
  const [countOne, dispatchOne] = useReducer(simpleReducer, simpleInitialState)
  const [countTwo, dispatchTwo] = useReducer(simpleReducer, simpleInitialState)

  return (
    <div>
      <p>
        multiple Reducers. current value is.countOne:{countOne},countTwo:
        {countTwo}
      </p>
      <button onClick={() => dispatchOne('increment')}>countOne++</button>
      <button onClick={() => dispatchTwo('decrement')}>countTwo--</button>
      {/* 同时绑定两个函数的时候用 ; 隔开或者换行 */}
      <button
        onClick={() => {
          dispatchOne('reset')
          dispatchTwo('reset')
        }}
      >
        resetOne
      </button>
    </div>
  )
}

/**
 * 组件之间使用state [App:A,B,C]
 */
const CounterContext = React.createContext() //注：如果在不同组件中使用，这个也需要导出，以便不同组件进行useContext引用
const initialValue = 0
const reduer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialValue
    default:
      return state
  }
}
function App() {
  const [counter, counterDispatch] = useReducer(reduer, initialValue)

  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      <p>share state of App. counter is:{counter}</p>
      <A />
    </CounterContext.Provider>
  )
}
function A() {
  const { counter, counterDispatch } = useContext(CounterContext)
  return (
    <div>
      <p>share state of A. counter is:{counter}</p>
      <button onClick={() => counterDispatch('increment')}>counter++</button>
      <button onClick={() => counterDispatch('decrement')}>counter--</button>
      <button onClick={() => counterDispatch('reset')}>reset</button>
    </div>
  )
}

/**
 * useState vs useReducer
 * 1.state 为简单数据类型，建议使用useState
 * 2.state 为复合数据类型，建议使用useReducer
 * 3.state 变化非常多，state关联变化，业务逻辑复杂，使用useReducer,便于状态管理
 * 4.state内部 useState,state全局 useReducer
 */

export default UseReducer
