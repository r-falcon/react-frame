import React, { useEffect, useRef, useState } from 'react';
import useDocumentTitle from './customize/useDocumentTitle';
import useMount from './customize/useMount';
import useUnMount from './customize/useUnMount';
import useCounter from './customize/useCounter';
import useSetState from './customize/useSetState';
import useDebounce from './customize/useDebounce';
// import { useEffect } from 'react';
import useDebounceEffect from './customize/useDebounceEffect';
import useDeepCompare from './customize/useDeepCompare';
import useScroll from './customize/useScroll';
// 获取最新的state值
import useLatest from './customize/useLatest';
import useCountDown from './customize/useCountDown';

/**
 * 其实这些hooks不一定要手写，github上好多现成的库可以使用：ahooks、react-use（使用多）、useHooks
 */

const CustomizeFunc = () => {
  useDocumentTitle('this is the first try');

  useMount(() => {
    console.log('mount, only render once');
  });

  useUnMount(() => {
    // 这里log的count值并不是最终改变的值，因为useEffect闭包机制导致。为了拿到实时的状态，借助useRef（封装中修改）
    console.log('unmount, count is: ', count);
  });

  const [count, increment, decrement, reset] = useCounter(10, 5);
  let queryParams = {
    query: '',
    pageNum: 1,
    pageSize: 10,
  };
  const [params, setParams] = useSetState(queryParams);

  // const apiDebounceParams = useDebounce(count, 1000);
  // useEffect(() => {
  //   console.log('params: ', apiDebounceParams);
  //   // 请求api
  // }, [apiDebounceParams]);
  // 改进写法
  useDebounceEffect(
    () => {
      // api请求
      console.log('params: ', count);
    },
    [count],
    1000
  );

  const [obj, setObj] = useState({ a: '1' });
  // 每次点击（即使a的值没变）都会执行，由于useEffect进行的是浅比较，每次都是一个闭包，每次都不同
  // useEffect(() => {
  //   console.log('obj rerender');
  // }, [obj]);
  // 自定义hooks，进行深度比较(只在a值改变的时候执行一次)
  useDeepCompare(() => {
    console.log('obj rerender');
  }, [obj]);

  const scrollRef = useRef(null);
  const [x, y] = useScroll(scrollRef);

  const [num, setNum] = useState(0);
  const handleAdd = () => {
    setNum(num + 1);
  };

  const [timestamp, { days, hours, minutes, seconds }] = useCountDown({
    targetDate: '2022-06-08 24:00:00',
  });

  return (
    <div>
      <p>current count: {count}</p>
      <button onClick={increment}>count++</button>
      <button onClick={decrement}>count--</button>
      <button onClick={reset}>reset</button>
      <p>
        current params: {params.pageNum},{params.pageSize}
      </p>
      <button onClick={() => setParams({ pageNum: 10, pageSize: 5 })}>
        change
      </button>
      <p>current obj is: a={obj.a}</p>
      <button onClick={() => setObj({ a: '2' })}>change obj</button>
      <div>
        {x},{y}
      </div>
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid #ccc',
          overflow: 'auto',
        }}
        ref={scrollRef}
      >
        <div style={{ width: '800px', height: '800px' }}></div>
      </div>
      <p>current num: {num}</p>
      <button onClick={handleAdd}>num++</button>

      <div>
        倒计时:{days}天{hours < 9 ? '0' + hours : hours}:
        {minutes < 9 ? '0' + minutes : minutes}:
        {seconds < 9 ? '0' + seconds : seconds}
      </div>
    </div>
  );
};

export default CustomizeFunc;
