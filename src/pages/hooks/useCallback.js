import React, { useState } from 'react';
import { useCallback } from 'react';

/**
 * useCallback
 * 避免函数重新生成，这样传递给子组件时，避免子组件重复渲染，提高性能
 * 但是必须要和shouldComponentUpdate+React.memo 配合使用
 * 建议一般项目不适用useCallback，不考虑性能优化
 * 两个参数：inline的callback函数；依赖项数组（可以多个，监听值变化时才会执行当前数组）
 */

/**
 * useMemo vs useCallback
 * 接受参数相同，都是在其依赖发生变化时执行，都返回缓存值
 * useMemo返回的是函数运行的结果；useCallback返回的是函数
 */
const CallbackFunc = () => {
  return <Parent />;
};

const Parent = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(1);

  // let addCount = () => {
  //   setCount(count + 1);
  // };
  // let addNumber = () => {
  //   setNumber(number + 1);
  // };

  let addCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  let addNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <div>
      <Count text="count" count={count} />
      <Number text="number" number={number} />
      <button onClick={addCount}>count++</button>
      <button onClick={addNumber}>number++</button>
    </div>
  );
};
/**
 * 改变count、number中任何一个，都会使两个组件重新渲染
 * 改进，useCallback+React.memo
 */
// const Count = props => {
//   console.log('render count');
//   return (
//     <div>
//       {props.text}-{props.count}
//     </div>
//   );
// };

// const Number = props => {
//   console.log('render number');
//   return (
//     <div>
//       {props.text}-{props.number}
//     </div>
//   );
// };
const Count = React.memo(props => {
  console.log('render count');
  return (
    <div>
      {props.text}-{props.count}
    </div>
  );
});

const Number = React.memo(props => {
  console.log('render number');
  return (
    <div>
      {props.text}-{props.number}
    </div>
  );
});

export default CallbackFunc;
