import React, { Fragment } from 'react';
import { useState, useMemo } from 'react';

/**
 * useMemo 性能优化
 * 有大量方法，不想每次组件更新都运行他们，只需要相关的参数改变的时候才运行
 */

/**
 * useEffect vs useMemo
 * useEffect是在DOM改变之后触发；useMemo是在DOM渲染之前触发
 * 不要在useMemo函数内部执行与渲染无关的操作
 * 在useMemo中使用setState会产生死循环
 */

const MemoFunc = () => {
  return (
    <Fragment>
      {/* 常规使用，避免重复执行某些不必要的方法 */}
      <NormalUse />
      {/* shouldComponentUpdate */}
      <Parent />
      {/* PureComponent */}
      <PureParent />
      {/* React.memo */}
      <MemoParent />
    </Fragment>
  );
};

const NormalUse = () => {
  let [time, setTime] = useState(0);
  let [number, setNumber] = useState(0);

  // 无论获取time还是number，都会执行，但是获取number的时候这里没必要执行
  let showTime = time => {
    console.log('执行');
    return new Date(time).toISOString();
  };
  // 解决
  let newTime = useMemo(() => showTime(time), [time]);

  return (
    <div>
      <p>
        time is: {newTime}, number is: {number}
      </p>
      <button onClick={() => setTime(new Date().getTime())}>set time</button>
      <button onClick={() => setNumber(Math.random())}>set number</button>
    </div>
  );
};

/**
 * useMemo vs React.memo()
 * useMemo，只有第二个参数更新，才会产生回调（useCallback原理也一样）
 * React.memo()：父组件的props没有发生变化，不会渲染子组件；第二个参数，可以传入一个判断方法，拿到prevProps和props进行比较，并判断是否更新
 * 区别：useMemeo可以不对所有的props进行比较，实现局部pure功能，对组件的某一部门进行缓存，只有参数变化时，才会重新执行。（useCallback和useMemo一样，不过前者进行的是函数缓存）
 */

/**
 * shouldComponentUpdate
 */
class Parent extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <p>current count : {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count++
        </button>
        <Son name="falcon" />
      </div>
    );
  }
}

class Son extends React.Component {
  // 如果不加此项判断，每次点击父组件按钮时，子组件都会rerender
  /**
   * shouldComponentUpdate
   * - 用于类组件
   * - 接受两个参数（第一个是下一次更新的props值，第二个是下一次更新的state值）
   * - 在每次渲染（render）之前被调用，并根据返回值（true/false）来决定是否调用渲染函数
   * - 组件首次渲染或触发forceUpdate()不会触发该函数
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) return false;
    return true;
  }
  render() {
    console.log('执行了');
    return <div>received name is : {this.props.name}</div>;
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
    count: 1,
    user: {
      name: 'falcon',
      age: 21,
    },
  };
  number = 1;

  render() {
    return (
      <div>
        {/* 这里number有更新，但是视图没有更新，children也没renender */}
        <button onClick={() => (this.number += 1)}>number++</button>
        {/* 改变count，但是没有更新，不会rerender，但是改变user，会rerender */}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              user: { ...this.state.user, age: this.state.user.age + 1 },
            })
          }
        >
          count++
        </button>
        <PureChildren number={this.number} user={this.state.user} />
      </div>
    );
  }
}

class PureChildren extends React.PureComponent {
  render() {
    console.log('执行son');
    return (
      <div>
        number: {this.props.number},name:
        {this.props.user.name},age:{this.props.user.age}
      </div>
    );
  }
}

/**
 * React.memo 只用于函数组件
 */
class MemoParent extends React.Component {
  state = {
    count: 0,
    job: {
      occupation: 'job',
      salary: 8000,
    },
  };

  // count 改变不会rerender
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // job改变会renrender
  handleChange = () => {
    this.setState({
      job: { ...this.state.job, salary: this.state.job.salary + 1000 },
    });
  };

  render() {
    return (
      <div>
        <p>count is: {this.state.count}</p>
        <button onClick={this.handleAdd}>count++</button>
        <MemoChild job={this.state.job} handleChange={this.handleChange} />
      </div>
    );
  }
}

const MemoChild = React.memo(props => {
  console.log('rerender');
  return (
    <div>
      <p>salary is: {props.job.salary}</p>
      <button onClick={props.handleChange}>salary++</button>
    </div>
  );
});

export default MemoFunc;
