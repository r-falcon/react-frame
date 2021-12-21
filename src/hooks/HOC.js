import React from 'react'

/**
 * HOC 高阶函数
 */
class Example extends React.Component {
  render() {
    return (
      <div>
        <p>
          current value is,x:{this.props.x},y:{this.props.y}
        </p>
        <button onClick={this.props.handleClick}>HOC click it</button>
      </div>
    )
  }
}

const HOC = (Component) => {
  return class extends React.Component {
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
        <Component
          {...this.props}
          {...this.state}
          handleClick={this.handleClick}
        />
      )
    }
  }
}

export default HOC(Example)
