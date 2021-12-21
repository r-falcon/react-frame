import React from 'react'

class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <p>count is: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          count--
        </button>
        <input
          type="text"
          value={this.state.count}
          onChange={(e) => this.setState({ count: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count++
        </button>
      </div>
    )
  }
}

export default State
