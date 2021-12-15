import React, { Fragment } from 'react'
import PSprops from './PSprops'
import PSrefs from './PSrefs'
import SPcallbacks from './SPcallbacks'

/**
 * 父传子：
 *  props
 *  refs
 * 子传父：
 *  callback functions[回调函数]
 *  event bubbling[事件冒泡]
 */

class CommunicatePanel extends React.Component {
  render() {
    return (
      <Fragment>
        <PSprops />
        <PSrefs />
        <SPcallbacks />
      </Fragment>
    )
  }
}

export default CommunicatePanel
