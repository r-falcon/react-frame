import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * PropTypes 类型检测
 */

class Greeting extends Component {
  render() {
    return (
      <div>
        Hello,{this.props.name},{this.props.number}
        <button onClick={this.handleAdd}>click</button>
      </div>
    )
  }

  handleAdd = () => {
    this.props.increment()
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  increment: PropTypes.func.isRequired,
}

Greeting.defaultProps = {
  name: 'alice',
}

export default Greeting
