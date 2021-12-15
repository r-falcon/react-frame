import React, { Fragment } from 'react'
import PSprops from './PSprops'
import PSrefs from './PSrefs'
import SPcallbacks from './SPcallbacks'
import SPbubbling from './SPbubbling'
import Nmiddleware from './Nmiddleware'

/**
 * 父传子：
 *  props
 * 子传父：
 *  instance methods[实例方法，refs]
 *  callback functions[回调函数]
 *  event bubbling[事件冒泡]
 * 非父子组件通信：
 *  通过父组件作为中间层实现数据互通：
 *    是兄弟组件：
 *    不是兄弟组件：能否用一个组件包裹变成兄弟组件
 */

class CommunicatePanel extends React.Component {
  render() {
    return (
      <Fragment>
        <PSprops />
        <PSrefs />
        <SPcallbacks />
        <SPbubbling />
        <Nmiddleware />
      </Fragment>
    )
  }
}

export default CommunicatePanel
