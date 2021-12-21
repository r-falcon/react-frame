import React, { Fragment } from 'react'
import State from './state'
import UseState from './UseState'
import RenderProps from './RenderProps'
import ChildrenProps from './ChildrenProps'
import HOC from './HOC'

/**
 * Hooks
 * 无状态组件（Function），无生命周期、无this、无state
 * 状态组件（Class）,有生命周期，有this，有state
 * 想要复用一个状态组件：渲染属性（render props）[this.props.children。注：props可以传递任何对象，包括组件和函数]、高阶组件（higher-order-components）[参数为组件，返回值为新组件的函数]
 */

class HookPanel extends React.Component {
  render() {
    return (
      <Fragment>
        <State />
        <UseState />
        <RenderProps />
        <ChildrenProps />
        <HOC />
      </Fragment>
    )
  }
}

export default HookPanel
