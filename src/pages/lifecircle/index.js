import React from 'react';

/**
 * 生命周期（旧）
 * 初始挂载：constructor、componentWillMount、render、componentDidMount
 * 更新状态：shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
 * 强制更新：componentWillUpdate、render、componentDidUpdate
 * 组件接受props：componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
 * 组件卸载：componentWillUnmount
 * 【注】设置shouldComponentUpdate的值为false，能通过setState()更新状态，但不会重新render渲染页面
 */

/**
 * 生命周期（新）
 * 弃用：componentWillMount、componentWillReceiveProps、componentWillUpdate
 * 新增：getDerivedStateFromProps、getSnapshotBeforeUpdate
 * 初始挂载：constructor、getDerivedStateFromProps、render、componentDidMount
 * 更新状态：getDerivedStateFromProps、shouldComponentUpdate、render、getSnapshotBeforeUpdate、componentDidUpdate
 * 强制更新：getDerivedStateFromProps、render、getSnapshotBeforeUpdate、componentDidUpdate
 * 卸载：componentWillUnmount
 * Error：getDerivedStateFromError、componentDidCatch
 */

// https://juejin.cn/post/7096137407409422344

class LifeCircle extends React.Component {
  // constructor,只会执行一次，返回一个组件实例
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>life circle</div>;
  }
}

export default LifeCircle;
