import React from 'react';

/**
 * setState()
 * 本身是同步方法，但是react更新后引起的动作是异步的
 * 作用是在原有状态的基础上合并并返回一个新的状态
 * state更新后，打印的值未变，但是页面变了
 * 有时候同步（setTimeout或者原生事件中），有时候异步
 * 解决setState异步不能拿到最新数据：回调、componentDidUpdate
 * setState过程：合并参数对象，触发调和过程；计算新树和老树差异（diff）；根据差异进行最小化渲染
 */

class StatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate() {
    console.log('update', this.state.count); //1
  }

  handleAdd = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log('callback', this.state.count); //1
      }
    );
    console.log('normal', this.state.count); //0
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {/* 显示1 */}
        <p>current count is: {count}</p>
        <button onClick={this.handleAdd}>count++</button>
      </div>
    );
  }
}

export default StatePanel;
