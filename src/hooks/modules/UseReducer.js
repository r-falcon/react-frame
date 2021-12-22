import React, { Fragment, useReducer } from 'react'

/**
 * useReducer是用于状态管理的api，是useState的替代方案
 * 区别：useState是useReducer构建的
 */

function UseReducer() {
  return (
    <Fragment>
      <SimpleDemo />
    </Fragment>
  )
}

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

export default UseReducer
