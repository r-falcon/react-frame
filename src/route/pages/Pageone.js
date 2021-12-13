import React from 'react'

/**
 * 定时器的挂载和卸载
 */

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    //挂载
    console.log('挂载')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    //卸载
    console.log('卸载')
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return <div>right now is : {this.state.date.toLocaleTimeString()}</div>
  }
}

class Pageone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        page one
        <Clock />
      </div>
    )
  }
}

export default Pageone
