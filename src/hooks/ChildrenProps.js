import React from 'react'

/**
 * render children
 */
class ChildrenProps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  handleClick = () => {
    this.setState({
      x: this.state.x + 1,
      y: this.state.y + 1,
    })
  }

  render() {
    return (
      <div>
        {this.props.children(this.state)}
        <button onClick={this.handleClick}>click it</button>
      </div>
    )
  }
}

class Props extends React.Component {
  render() {
    return (
      <div>
        current value is,x:{this.props.params.x},y:{this.props.params.y}
      </div>
    )
  }
}

class Children extends React.Component {
  render() {
    return (
      <ChildrenProps>{(params) => <Props params={params} />}</ChildrenProps>
    )
  }
}

export default Children
