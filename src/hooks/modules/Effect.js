import React from 'react'

class Effect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <p>no useEffect value is:{this.state.count}</p>
        <button onClick={this.handleAdd}>count++</button>
      </div>
    )
  }
}

export default Effect
