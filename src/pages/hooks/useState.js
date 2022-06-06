import React, { Fragment, useCallback } from 'react';
import { useState, useMemo } from 'react';

/**
 * 类组件中state私有，完全受控于当前组件
 * 构造函数是唯一可以给state赋值的地方，不要直接修改state，不会触发render重新渲染组件
 * setState有时候同步(setTimeout或者原生事件中)，有时候异步
 * setState异步带来的一些问题和解决：函数式setState、加定时器、componentDidUpdate、setState同步更新
 * 获取setState异步结果：回调函数（可能产生回调地狱）、promise（依旧是异步的，不能解决代码合并问题）、async/await（最佳方案）
 */

class StatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      a: 0,
    };
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleSub = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleChange = e => {
    this.setState({
      count: e.target.value,
    });
  };

  handleA = () => {
    // 由于setState不会立即改变state状态，所以每一次setState的this.state.a的值都为0，返回结果1
    // this.setState({ a: this.state.a + 1 });
    // this.setState({ a: this.state.a + 1 });
    // this.setState({ a: this.state.a + 1 });
    // 解决1：函数式setState
    // this.setState((preState, props) => ({ a: preState.a + 1 }));
    // this.setState((preState, props) => ({ a: preState.a + 1 }));
    // this.setState((preState, props) => ({ a: preState.a + 1 }));
    // 解决2：加定时器
    // setTimeout(() => {
    //   this.setState({ a: this.state.a + 1 });
    //   this.setState({ a: this.state.a + 1 });
    //   this.setState({ a: this.state.a + 1 });
    // }, 0);
    // 解决3：setState同步更新。绕过react通过addEventListener直接添加的事件处理函数和setTimeout/setInterval 产生的异步调用
    // this.setState({ a: this.state.a + 1 });
    // this.setState({ a: this.state.a + 1 });
    // this.setState({ a: this.state.a + 1 });
    // 【注意】：传统state和setState函数一定不要混用。无论多少个传统setState，结果都是a为1，最后的效果都是a增加2
    // this.setState({ a: this.state.a + 1 });
    // this.setState({ a: this.state.a + 1 });
    // this.setState((preState, props) => ({ a: preState.a + 1 }));
    // 获取1：回调函数(可能会产生回调地狱)
    // this.setState({ a: this.state.a + 1 }, () => {
    //   console.log('a: ', this.state.a);
    // });
    // 获取2：promise(依旧是异步的，不能解决代码合并问题)
    // this.setStatePromise({ a: this.state.a + 1 })
    //   .then(() => {
    //     console.log('a：', this.state.a); // 1
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // 获取3：async/await（最佳方案）
    this.setStateAsync();
  };

  setStatePromise = state => {
    return new Promise((resolve, reject) => {
      if (
        !(
          typeof state == 'object' ||
          typeof state == 'function' ||
          state == null
        )
      ) {
        reject('参数不对');
      } else {
        this.setState(state, resolve());
      }
    });
  };

  setStateAsync = async () => {
    try {
      await this.setState({ a: this.state.a + 1 });
      console.log('a：', this.state.a);
      await this.setState({ a: this.state.a + 1 });
      console.log('a：', this.state.a);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    document.querySelector('#btn').addEventListener('click', this.handleA);
  }

  componentDidUpdate() {
    console.log('a：', this.state.a);
  }

  render() {
    return (
      <div>
        <p>current count : {this.state.count}</p>
        <button onClick={this.handleAdd}>count++</button>
        <button onClick={this.handleSub}>count--</button>
        <div>
          <input
            type="text"
            value={this.state.count}
            onChange={this.handleChange}
          />
        </div>
        <p>a value : {this.state.a}</p>
        <button onClick={this.handleA}>a++(3)</button>
        <button id="btn">a++(3)</button>
      </div>
    );
  }
}

/**
 * useState
 */

const StateFunc = function () {
  return (
    <Fragment>
      {/* 1.每次渲染都是独立的闭包（有自己的props、state和事件处理函数;点击更新状态时，函数组件会重新调用，每次渲染独立，取到的值不受后面操作的影响） */}
      <CloserPackage />
      {/* 2.函数式更新（如果新的state值需要通过之前的state值计算得出，将当前回调函数作为参数传递给setState） */}
      <FuncUpdate />
      {/* 3.惰性初始化state（如果初始state需要通过复杂的计算得出，则可传入一个函数，此函数只在初始渲染时被调用） */}
      <LazyInit />
      {/* 4.useState使用object.is来替换state。比较新旧状态是否相等；传入状态没有变化，则不重新渲染组件；useState不会自动合并对象，可以使用函数式setState结合展开运算符实现合并更新对象 */}
      <CompareUpdate />
      {/* 5.能用其他状态计算出来就不用单独声明状态 */}
      <DeclareState />
      {/* 6.保证数据源唯一（同一个数据，保证只存储在同一个地方）  */}
      {/* 7.useState适当合并 */}
      <MergeState />
    </Fragment>
  );
};

const CloserPackage = function () {
  let [number, setNumber] = useState(0);

  let handleAdd = () => setNumber(number + 1);

  let handleLog = () => {
    setTimeout(() => {
      console.log(number); //输出的是click当前number值，而不是最终修改number值
    }, 1000);
  };

  return (
    <div>
      <p>number is : {number}</p>
      <button onClick={handleAdd}>number++</button>
      <button onClick={handleLog}>log number</button>
    </div>
  );
};

const FuncUpdate = function () {
  let [count, setCount] = useState(1);

  let lazyAdd = () => {
    setTimeout(() => {
      // 使用的是点击触发时的state值
      // setCount(count + 10);
      // 这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
      setCount(count => count + 10);
    }, 3000);
  };

  return (
    <div>
      <p>count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <button onClick={lazyAdd}>count+10</button>
    </div>
  );
};

const LazyInit = () => {
  let initValue = () => {
    let value = 10;
    value = (value + 10) / 5;
    return value;
  };

  let [value, setValue] = useState(initValue);

  return (
    <div>
      <p>current value : {value}</p>
      <button onClick={() => setValue(value + 1)}>value++</button>
    </div>
  );
};

const CompareUpdate = () => {
  console.log('渲染组件');
  let [user, setUser] = useState({ name: 'falcon', age: 20 });

  let changeUser = () => {
    setUser(user => ({ ...user, age: user.age + 1, sex: '女' }));
  };

  return (
    <div>
      <p>
        user : name-{user.name}，age-{user.age}，sex-
        {user.sex ? user.sex : null}
      </p>
      {/* 不渲染组件 */}
      <button onClick={() => setUser(user)}>no change user</button>
      {/* 渲染组件 */}
      <button onClick={changeUser}>change user</button>
    </div>
  );
};

const DeclareState = () => {
  let [source, setSource] = useState([
    { type: 'doing', label: '任务1' },
    { type: 'done', label: '任务2' },
    { type: 'doing', label: '任务2' },
  ]);

  let doneSource = useMemo(
    () => source.filter(item => item.type === 'done'),
    [source]
  );
  let doingSource = useMemo(
    () => source.filter(item => item.type === 'doing'),
    [source]
  );

  return (
    <div>
      <p>
        total : done-{doneSource.length}，doing-{doingSource.length}
      </p>
    </div>
  );
};

const MergeState = () => {
  let userInfo = {
    firstName: 'Eileen',
    lastName: 'Murphy',
    age: 30,
    sex: '女',
    address: '猜不到的36街',
  };
  let [user, setUser] = useState(userInfo);

  let handleFirst = () =>
    setUser(user => ({ ...user, firstName: 'update firstName' }));

  let handleAge = () => setUser(user => ({ ...user, age: user.age + 1 }));

  return (
    <div>
      <p>
        user is : firstName-{user.firstName}，lastName-{user.lastName}
        ，age-
        {user.age}，sex-{user.sex}，address-{user.address}
      </p>
      <button onClick={handleFirst}>update-firstName</button>
      <button onClick={handleAge}>update-age</button>
    </div>
  );
};

// export default StatePanel;
export default StateFunc;
