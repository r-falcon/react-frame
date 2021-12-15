import React from 'react'

class Son extends React.Component {
  render() {
    return (
      <div>
        name is: {this.props.name},age is: {this.props.age},func is:
        {this.props.func()}
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'falcon',
      age: 21,
    }
  }

  render() {
    return (
      <Son name={this.state.name} age={this.state.age} func={this.parentFunc} />
    )
  }

  parentFunc = () => {
    return 'parent function'
  }
}

class PSprops extends React.Component {
  render() {
    return (
      <div>
        <p>父子组件Props传值</p>
        <Parent />
      </div>
    )
  }
}

export default PSprops
