import React from 'react'

/**
 * 用途，子组件是一个modal弹框，父组件可以通过refs来控制子组件的显示和隐藏
 */

class PSref extends React.Component {
  render() {
    return <Parent />
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      sonFunc: function () {},
    }
  }

  componentDidMount() {
    this.setState({
      name: this.foo.state.name,
      age: this.foo.state.age,
      sonFunc: this.foo.sonFunc.bind(this),
    })
  }

  render() {
    return (
      <div>
        <Son
          ref={(foo) => {
            this.foo = foo
          }}
        />
        <div>
          name is: {this.state.name}
          age is: {this.state.age}
          func is: {this.state.sonFunc()}
        </div>
      </div>
    )
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'falcon',
      age: 21,
    }
  }

  render() {
    return <div>son props</div>
  }

  sonFunc = () => {
    return 'son function'
  }
}

export default PSref
