import React from 'react'

/**
 * 定时器的挂载和卸载
 */

/**
 * 通过箭头函数传递，事件对象必须显示的进行传递
 * 通过bind的方式，事件可以通过隐式的方式进行传递，但是要保证事件对象e在所传递参数的最后面
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

class TransParams extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'falcon',
      age: 21,
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleTrans.bind(this, this.state.name, this.state.age)}
        >
          params 传递
        </button>
      </div>
    )
  }

  handleTrans = (name, age, e) => {
    console.log('name', name)
    console.log('age', age)
    console.log('e', e)
    console.log(123)
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
        <TransParams />
      </div>
    )
  }
}

export default Pageone
