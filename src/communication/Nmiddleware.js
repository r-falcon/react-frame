import React from 'react'

class BoxA extends React.Component {
  render() {
    return <div>count is : {this.props.count}</div>
  }
}

class BoxB extends React.Component {
  render() {
    return <button onClick={() => this.props.onClick()}>click me</button>
  }
}

class Nmiddleware extends React.Component {
  state = {
    count: 0,
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <BoxA count={this.state.count} />
        <BoxB onClick={this.setCount} />
      </div>
    )
  }
}

export default Nmiddleware
