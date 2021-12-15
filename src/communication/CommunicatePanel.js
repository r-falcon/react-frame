import React, { Fragment } from 'react'
import PSprops from './PSprops'
import PSrefs from './PSrefs'

class CommunicatePanel extends React.Component {
  render() {
    return (
      <Fragment>
        <PSprops />
        <PSrefs />
      </Fragment>
    )
  }
}

export default CommunicatePanel
