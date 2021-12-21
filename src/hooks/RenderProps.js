import React from 'react'

class RenderProps extends React.Component {
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
        {this.props.render(this.state)}
        <button onClick={this.handleClick}>click it</button>
      </div>
    )
  }
}

class Props extends React.Component {
  render() {
    return (
      <p>
        current value is,x:{this.props.params.x},y:{this.props.params.y}
      </p>
    )
  }
}

class Render extends React.Component {
  render() {
    return <RenderProps render={(params) => <Props params={params} />} />
  }
}

export default Render
