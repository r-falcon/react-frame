import React from 'react'

/**
 * react生命周期：
 * 1.初始化
 *  定义属性(props)和状态(state),this指向的绑定
 * 2.挂载
 *  componentWillMount：只执行一次，能放这里的，直接放入构造函数
 *  render：页面state或prop发生变化时执行
 *  componentDidMount：组件挂载完成执行，只执行一次，基本上ajax都在这里发起请求
 * 3.更新
 *  componentWillReceiveProps：子组件接收父组件传递过来的参数，且父组件render函数重新，非第一次存在的dom中被执行
 *  shouldComponentUpdate（nextProps,nextState）：组件更新之前自动执行，要求返回一个布尔值，必须要有返回。默认true，false不更新，可以用来做性能优化，比较是否一致，不一致进行更新
 *  componentWillUpdate：组件更新之前，上个函数返回false则不执行
 *  componentDidUpdate：组件更新之后执行
 * 4.销毁
 *  组件销毁，这里可以执行清除定时器操作等
 */

class LifeCircle extends React.Component {
  constructor(props) {
    super(props)
  }
}

export default LifeCircle
