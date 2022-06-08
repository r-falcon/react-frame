import React, { Fragment, useContext } from 'react';
import { useReducer } from 'react';

/**
 * useReducer是用于状态管理的api，是useState的替代方案
 * 区别：useState是useReducer构建的
 * 组件内部使用useReducer: simple state、complex state
 * 组件之间使用state，完成全局的状态管理：useReducer + useContext[useReducer在根节点创建一个counter，useContext为子组件提供和消费context]
 */

/**
 * useState vs useReducer
 * 简单数据类型，建议useState
 * 复合数据类型，建议useReducer
 * state 变化非常多，state关联变化，业务逻辑复杂，使用useReducer,便于状态管理
 * state内部，useState;state全局，useReducer
 */

const ReducersFunc = () => {
  return (
    <Fragment>
      {/* 简单数据类型 */}
      <Simple />
      {/* 复杂数据类型 */}
      <Complex />
      {/* 如果有多个state，并且state变化的方式又相同的时候，可以多次使用useReducer */}
      <Repeat />
      {/* 组件之间使用state */}
      <Whole />
    </Fragment>
  );
};

/**
 * simple
 */
const simpleInitialState = 0;
const simpleReducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return simpleInitialState;
    default:
      return state;
  }
};
const Simple = () => {
  const [count, dispatch] = useReducer(simpleReducer, simpleInitialState);

  return (
    <div>
      <p>current value is: {count}</p>
      <button onClick={() => dispatch('increment')}>count++</button>
      <button onClick={() => dispatch('decrement')}>count--</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

/**
 * complex
 */
const complexInitialState = {
  firstNumber: 0,
  secondNumber: 10,
};
const complexReducer = (
  state = complexInitialState,
  action = { type: '', value: 0 }
) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstNumber: state.firstNumber + action.value };
    case 'increment2':
      return { ...state, secondNumber: state.secondNumber + action.value };
    case 'decrement1':
      return { ...state, firstNumber: state.firstNumber - action.value };
    case 'decrement2':
      return { ...state, secondNumber: state.secondNumber - action.value };
    case 'reset':
      return complexInitialState;
    default:
      return state;
  }
};
const Complex = () => {
  const [count, dispatch] = useReducer(complexReducer, complexInitialState);

  return (
    <div>
      <p>
        value is: first-{count.firstNumber},second-{count.secondNumber}
      </p>
      <button onClick={() => dispatch({ type: 'increment1', value: 3 })}>
        first+3
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>
        second+5
      </button>
      <button onClick={() => dispatch({ type: 'reset', value: 0 })}>
        reset
      </button>
    </div>
  );
};

/**
 * repeat
 */
const repeatInitState1 = 0;
const repeatInitState2 = 0;
const Repeat = () => {
  const [count1, dispatch1] = useReducer(simpleReducer, repeatInitState1);
  const [count2, dispatch2] = useReducer(simpleReducer, repeatInitState2);

  return (
    <div>
      <p>
        current count is: count1-{count1},count2-{count2}
      </p>
      <button onClick={() => dispatch1('increment')}>count1++</button>
      <button onClick={() => dispatch2('decrement')}>count2--</button>
      {/* 同时绑定两个函数时，用 ； 或者 换行 */}
      <button
        onClick={() => {
          dispatch1('reset');
          dispatch2('reset');
        }}
      >
        reset
      </button>
    </div>
  );
};

/**
 * whole
 */
const CounterContext = React.createContext(); //【注】：如果在不同的组件中使用，这个也需要导出，以便不同组件进行useContext引用
const initialValue = 0;
const reduer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};
const Whole = () => {
  const [counter, dispatch] = useReducer(reduer, initialValue);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      <A />
    </CounterContext.Provider>
  );
};

const A = () => {
  const { counter, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>counter is:{counter}</p>
      <button onClick={() => dispatch('increment')}>counter++</button>
      <button onClick={() => dispatch('decrement')}>counter--</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

export default ReducersFunc;
