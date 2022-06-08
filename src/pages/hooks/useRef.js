import React, { Fragment } from 'react';
import { useRef, useEffect, useState } from 'react';

/**
 * ref 适用案例：
 * 1. 管理焦点、文本选择、媒体播放
 * 2. 触发强制动画
 * 3. 集成第三方dom库
 * 注意：
 * 1. 勿过度使用ref
 * 2. 让更高的组件拥有state
 */

const RefFunc = () => {
  return (
    <Fragment>
      {/* 获取input焦点 */}
      <InputFocus />
      {/* 停止计时器时，成为容器，缓存变量 */}
      <NormalStop />
      <RefStop />
      {/* 解决闭包陷阱 */}
      <Closer />
      {/* 变更.current属性不会引发rerender，根据这一特性可以获取前一个值 */}
      <PreValue />
    </Fragment>
  );
};

const InputFocus = () => {
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

class NormalStop extends React.Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>normal current timer is:{this.state.timer}</p>
        <button onClick={() => clearInterval(this.interval)}>
          normal clear
        </button>
      </div>
    );
  }
}

const RefStop = () => {
  let [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <div>
      <p>hook current timer is : {timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        hook clear
      </button>
    </div>
  );
};

const Closer = () => {
  let [count, setCount] = useState(0);
  let countRef = useRef();
  countRef.current = count;

  let handleClick = () => {
    // 打印的为当时点击时候的count值。解决：useRef(),每次点击页面rerender，countRef.current被重新赋值
    setTimeout(() => {
      // console.log('count', count);
      console.log('count', countRef.current);
    }, 3000);
  };

  return (
    <div>
      <p>count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

const PreValue = () => {
  let [count, setCount] = useState(0);
  let countRef = useRef();

  useEffect(() => {
    countRef.current = count;
  });

  return (
    <div>
      <p>current is: {count}</p>
      <p>prev is: {countRef.current}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  );
};

export default RefFunc;
